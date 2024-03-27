import React, { useEffect, useState, createContext } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

export const PlantContext = createContext()
function App() {

  const[plantListing, setPlantListing] = useState([])
  
  useEffect( () => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(plants => setPlantListing(plants))
  }, [])

  return (
    <PlantContext.Provider value={{plantListing, setPlantListing}}>
      <div className="app">
        <Header />
        <PlantPage />
      </div>
    </PlantContext.Provider>
  );
}

export default App;
