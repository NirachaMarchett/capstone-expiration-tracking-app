import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchBarValue, setSearchBarValue] = useState("");

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchBarValue(searchTerm);
    onSearch(searchTerm);
  };
  const handleCancel = () => {
    setSearchBarValue("");
    onSearch("");
  };

  return (
    <>
      <form>
        <label htmlFor="searchTerm">Item Name:</label>
        <input
          name="searchTerm"
          id="searchTerm"
          value={searchBarValue}
          onChange={handleInputChange}
          placeholder="What are you looking for?"
        />
      </form>
      <button onClick={handleCancel}>Cancel</button>
    </>
  );
}
