import { useState } from "react";
import GlobalStyle from "../styles";
import { groceries } from "@/resources/groceries";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
