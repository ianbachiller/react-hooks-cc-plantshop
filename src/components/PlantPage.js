import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage({ handleSearchChange, filteredPlants }) {
  return (
    <main>
      <NewPlantForm />
      <Search handleSearchChange={handleSearchChange} />
      <PlantList filteredPlants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
