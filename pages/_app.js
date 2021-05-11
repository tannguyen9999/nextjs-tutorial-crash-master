// import '../styles/globals.css'
// import '../styles/main.css'
import { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import React from "react";
import Loading from "../components/LoadingLine";
import dynamic from "next/dynamic";
const line = [
  "/",
  "/diem-song-ao",
  "/quancaphe",
  "/diem-an-uong",
  "/diem-an-vat",
  "/ngu-nghi",
  "/dac-san-da-lat",
];

const Layout = dynamic(import("../components/Layout"), {
  ssr: false,
  loading: () => (
    <div>
      <div className="loader">
        <style>{`
	.loader {
		border: 2px solid #f3f3f3;
		border-radius: 50%;
		border-top: 2px solid blue;
		border-right: 2px solid green;
		border-bottom: 2px solid red;
		margin: 20px auto;
		width: 20px;
		height: 20px;
		-webkit-animation: spin 2s linear infinite;
		animation: spin 2s linear infinite;
	  }
	  
	  @-webkit-keyframes spin {
		0% { -webkit-transform: rotate(0deg); }
		100% { -webkit-transform: rotate(360deg); }
	  }
	  
	  @keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	  }
	`}</style>
      </div>
      <div style={{ textAlign: "center" }}>Đang load trang đợi tí nhé...</div>
    </div>
  ),
});
function MyApp({ Component, pageProps, val }) {
  const router = useRouter();

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  });
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router.events]);

  return (
    <React.Fragment>
      <Head>
        <title key="title">Du lịch Đà Lạt có gì ?</title>
        <meta
          name="description"
          content="Các địa điểm vui chơi ăn uống tại Đà Lạt"
        />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta httpEquiv="content-language" content="vi" />
        <meta
          name="google-site-verification"
          content="ZpFA1kPbIReFQGALNPmSHK1OX_FOhq2J68XnpRKROtY"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Đà Lạt siêu xink" />
        <meta
          property="og:url"
          content="https://nextjs-tutorial-crash-master.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhvp2fnsk/image/upload/v1620715109/dev_setups/uq9f0htkov5lvxzimquj.png?fbclid=IwAR0kE1vB0st8BH3qz5XMMeKMsrrxs-Pod_32xZe0MTXEqPVVAE3tdRRDObA"
        />
        <meta
          property="og:description"
          content="Khám phá Đà Lạt mát mẻ, đồ ăn ngon"
        />
        <meta property="article:author" content="Nguyen Tan" />
        <meta property="article:published_time" content="2021-05-10" />
        <meta property="article:tag" content="du lịch đà lat" />
        <meta property="article:tag" content="du lich da lat" />
        <meta property="article:tag" content="chơi gì ở đà lạt" />
        <meta property="article:tag" content="sống ảo tại đà lạt" />
        <meta
          property="article:tag"
          content="những địa điểm nổi tiếng đà lạt"
        />
        <meta name="geo.region" content="VN" />
        <meta name="geo.placename" content="Th&agrave;nh phố Thủ Đức" />
        <meta name="geo.position" content="10.847811;106.785799" />
        <meta name="ICBM" content="10.847811, 106.785799" />
        <meta name="robots" content="noodp,index,follow" />
      </Head>
      <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <Layout valuee={val}>
        <Component val={val} {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pathname;
  let res;

  try {
    pathname = ctx?.pathname;
    res = line.findIndex((e) => e == pathname);
  } catch (error) {}
  if (res == -1 || !res) {
    res = 0;
  }
  return {
    val: res,
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

export default MyApp;
