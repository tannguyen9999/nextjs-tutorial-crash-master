import React, { useState, useEffect } from "react";
import styless from '../styles/LayoutHome.module.css'

const LayoutHomeLeft = ({ children }) => {
  return (
    <div className={styless.LayoutHomeLeft}>
      <main >{children}</main>
    </div>
  );
};

export default LayoutHomeLeft;
