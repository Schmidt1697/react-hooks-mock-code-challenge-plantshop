import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  //state
const [plantData, setPlantData] = useState([]);

//get plant Data
useEffect(() => {
  fetch("http://localhost:6001/plants")
.then(res => res.json())
.then(data => {
  setPlantData(data)
  
})
}, [])

//update Plants w/ new plant form
const onAddNewPlant = (newPlant) => {
  return (
    setPlantData([
      ...plantData,
      newPlant
    ])
  )
}


  return (
    <div className="app">
      <Header />
      <PlantPage plantData={plantData} onAddNewPlant={onAddNewPlant}/>
    </div>
  );
}

export default App;

//1.[X] when app starts - see all plants
//2.[X] add a new plant to the page by submitting form
//3.[X] mark a plant as sold out
//4.[X] can search plants by their name and see filtered plant list
