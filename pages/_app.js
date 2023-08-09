import { useState } from "react";
import GlobalStyle from "../styles";
import { groceries } from "@/resources/groceries";

export default function App({ Component, pageProps }) {
  const [groceriesList, setGroceriesList] = useState(groceries);

  const handleAddItem = (newItem) => {
    setGroceriesList([...groceriesList, newItem]);
  };

  const handleItemUpdate = (updatedDetail) => {
    // Update the groceries list with the updated detail
    const updatedList = groceriesList.map((item) =>
      item.id === updatedDetail.id ? updatedDetail : item
    );

    setGroceriesList(updatedList);
  };
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onAddItem={handleAddItem}
        groceriesList={groceriesList}
        onChange={handleItemUpdate}
      />
    </>
  );
}
