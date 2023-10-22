import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainHeader from "../components/sections/mainHeader";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MainHeader />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
