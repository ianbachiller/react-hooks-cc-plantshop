import React, { useState, useContext } from "react";
import { PlantContext } from "./App";

function Search() {
  const [search, setSearch] = useState("");
  const { plantListing, setPlantListing } = useContext(PlantContext);

  function handleSearchChange(e) {
    const searchText = e.target.value.toLowerCase();
    setSearch(searchText);
    if (searchText === "") {
      fetch("http://localhost:6001/plants")
        .then(resp => resp.json())
        .then(plants => {
          setPlantListing(plants);
        })
        .catch(error => console.error("Error fetching plants:", error));
    } else {
      const filteredPlants = plantListing.filter(plant =>
        plant.name.toLowerCase().includes(searchText)
      );
      console.log("Searchtext:", searchText)
      console.log("Returned Filtered Array:", filteredPlants)
      setPlantListing(filteredPlants);
    }
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={search}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
