import React from "react";
import "./layout.css";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
