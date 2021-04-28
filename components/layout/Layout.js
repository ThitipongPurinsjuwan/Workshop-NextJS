import Header from "./Header";
import React, { useEffect, useState } from "react";
import Head from "../head";

function Layout(props) {
  // useEffect(() => {
  //   document.body.classList.add("js");
  // }, []);
  return (
    <>
      <Head />
      <Header />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
