// App.js
import React, { useEffect, useState, createContext } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import PlantList from "./PlantList"

export const PlantContext = createContext();

function App() {
  const [search, setSearch] = useState("");
  const [plantListing, setPlantListing] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(plants => setPlantListing(plants));
  }, []);

  function handleSearchChange(e) {
    const searchText = e.target.value.toLowerCase();
    console.log(searchText)
    setSearch(searchText);
  }
  const filteredPlants = plantListing.filter((plant => plant.name.toLowerCase().includes(search.toLowerCase())))
  return (
    <PlantContext.Provider value={{ plantListing, setPlantListing, search }}>
      <div className="app">
        <Header />
        <PlantPage  handleSearchChange={handleSearchChange} filteredPlants={filteredPlants}/>
      </div>
    </PlantContext.Provider>
  );
}

export default App;
