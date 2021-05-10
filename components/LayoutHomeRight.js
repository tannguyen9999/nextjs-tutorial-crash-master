import Head from "next/head";
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import styles from "../styles/Layout.module.css";
import NavbarMenu from "./NavbarMenu";
import styless from '../styles/LayoutHome.module.css'

const LayoutHomeRight = ({ children }) => {
  return (
    <div
    className={styless.LayoutHomeRight}
    >
      <main >{children}</main>
    </div>
  );
};

export default LayoutHomeRight;
