import React, { useState } from "react";

function PlantCard({ plant }) {
  //state
  const [isOutOfStock, setisOutOfStock] = useState(false)

  const handleStockBtn = () => {
    return (
      setisOutOfStock(isOutOfStock => !isOutOfStock)
    )
  }
 
  const className = isOutOfStock ? '' : 'primary';
  const btnText = isOutOfStock ? 'Out of stock': 'In Stock'

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: $ {plant.price}</p>
        <button onClick={handleStockBtn} className={className}>{btnText}</button>
     
    </li>
  );
}

export default PlantCard;

