import Head from "next/head";
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import styles from "../styles/Layout.module.css";
import NavbarMenu from "../components/NavbarMenu";

import Footer from "./Footer/index";

const Layout = ({ children, valuee }) => {
  return (
    <div>
      <Container maxWidth="lg" className={styles.layoutContainer}>
        <Head>
          <title key="title">Du lịch Đà Lạt có gì ?</title>
          <meta
            name="description"
            content="Các địa điểm vui chơi ăn uống tại Đà Lạt"
          />
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
          <meta http-equiv="content-language" content="vi" />

          <meta property="og:type" content="article" />
          <meta property="og:title" content="Đà Lạt siêu xink" />
          <meta
            property="og:url"
            content="https://nextjs-tutorial-crash-master.vercel.app/"
          />
          <meta
            property="og:image"
            content="https://saigonstartravel.com/wp-content/uploads/2019/05/tour-da-lat-2n2d-3.jpg"
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

        <header>
          <NavbarMenu valuee={valuee} />
        </header>

        <main style={{ padding: "0px 24px", minHeight: "100vh" }}>
          {children}
        </main>
      </Container>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
