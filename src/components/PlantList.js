// PlantList.js
import React, { useContext } from "react";
import PlantCard from "./PlantCard";
import { PlantContext } from "./App";

function PlantList({filteredPlants}) {
  console.log(filteredPlants)
  const { plantListing } = useContext(PlantContext);
  const plantListOfCards = filteredPlants.map(plant => (
    <PlantCard
      key={plant.id}
      name={plant.name}
      price={plant.price}
      image={plant.image}
    />
  ));

  return <ul className="cards">{plantListOfCards}</ul>;
}

export default PlantList;
