import React, { useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ 
  plantData, 
  onAddNewPlant
  }) {
  //state
  const [searchQuery, setSearchQuery] = useState('')

  //filter through plants by search name 
  const filteredPlants = plantData.filter(plant => {
    return (plant.name.toLowerCase().includes(searchQuery.toLowerCase()))
    })

  console.log(filteredPlants)


    return (
      <main>
        <NewPlantForm onAddNewPlant={onAddNewPlant}/>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <PlantList plantData={filteredPlants}/>
      </main>
    );
}

export default PlantPage;
