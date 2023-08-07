import { useState } from "react";
import GlobalStyle from "../styles";
import { groceries } from "@/resources/groceries";

export default function App({ Component, pageProps }) {
  const [groceriesList, setGroceriesList] = useState(groceries);
  // const [searchTerm, setSearchTerm] = useState("");

  const handleAddItem = (newItem) => {
    setGroceriesList([...groceriesList, newItem]);

    // const handleSearch = (term) => {
    //   setSearchTerm(term);
    // };
  };
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onAddItem={handleAddItem}
        groceriesList={groceriesList}
        // onSearch={handleSearch}
        // searchTerm={searchTerm}
      />
    </>
  );
}
