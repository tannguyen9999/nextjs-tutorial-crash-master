// import '../styles/globals.css'
// import '../styles/main.css'
import { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { NextSeo } from "next-seo";

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
    <div>
      <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <Layout valuee={val}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
MyApp.getInitialProps = async ({ ctx }) => {
  const pathname = ctx?.pathname;
  let res = line.findIndex((e) => e == pathname);
  if (res == -1) {
    res = 0;
  }
  return {
    val: res,
  };
};
export default MyApp;
