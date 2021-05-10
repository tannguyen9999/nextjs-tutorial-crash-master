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
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <Head>
            <meta
              name="description"
              key="description"
              content="Khám phá các món ngon, địa điểm nghỉ dưỡng Đà Lạt"
            />
            <meta
              property="og:title"
              content="Du lịch Đà Lạt có gì ?"
              key="og:title"
            />
            <meta
              property="og:url"
              key="og:url"
              content="arc.com/customsoftware"
            />
          </Head>
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
