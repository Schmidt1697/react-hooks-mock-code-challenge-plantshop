import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData }) {
  console.log(plantData)
  
  const plantList = plantData.map(plant => {
    return (
      <PlantCard key={plant.id} plant ={plant} />
    )
  })
  return (
    <ul className="cards">
      {plantList}
    </ul>
  );
}

export default PlantList;
