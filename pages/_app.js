import { useState } from "react";
import GlobalStyle from "../styles";
import { groceries } from "@/resources/groceries";

export default function App({ Component, pageProps }) {
  const [groceriesList, setGroceriesList] = useState([groceries]);
  const handleAddItem = (newItem) => {
    setGroceriesList([...groceriesList, newItem]);
  };
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onAddItem={handleAddItem}
        groceriesList={groceriesList}
      />
    </>
  );
}
