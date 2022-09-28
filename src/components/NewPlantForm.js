import React, {useState} from "react";

function NewPlantForm({ onAddNewPlant }) {
  //state for each piece of form data
  const[plantName, setPlantName]= useState('');
  const[plantImage, setplantImage]= useState('');
  const[plantPrice, setPlantPrice]= useState('');

  //listen for events on each plant form
  const handleNewPlantName = (e)=>{
    e.preventDefault();
    setPlantName(e.target.value)
    
  }
  const handleNewPlantImage = (e)=>{
    e.preventDefault();
    setplantImage(e.target.value)
    
  }
  const handleNewPlantPrice = (e)=>{
    e.preventDefault();
    setPlantPrice(e.target.value)
  }
  //handle form submit

  const handleNewPlantSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      name: plantName,
      image: plantImage,
      price: plantPrice
    }
    onAddNewPlant(newPlant)
  }

  //

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlantSubmit}>
        <input type="text" name="name" value={plantName} onChange={handleNewPlantName}placeholder="Plant name" />
        <input type="text" name="image" value={plantImage} onChange={handleNewPlantImage}placeholder="Image URL" />
        <input type="number" name="price" step="0.01" value={plantPrice} onChange={handleNewPlantPrice} placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
