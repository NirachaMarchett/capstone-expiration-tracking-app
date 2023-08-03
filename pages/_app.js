import { useState } from "react";
import GlobalStyle from "../styles";
import HomePage from ".";
import AddItemPage from "./add";

export default function App({ Component, pageProps }) {
  // const [groceries, setGroceries] = useState([]);
  // const handleAddItem = (newItem) => {
  //   setGroceries((prevGroceries) => [...prevGroceries, newItem]);
  // };
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      {/* <HomePage groceries={groceries} />
      <AddItemPage onAddItem={handleAddItem} /> */}
    </>
  );
}
