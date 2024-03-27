import React, {useState} from "react";

function PlantCard({name, price, image}) {
  const[isStocked, setIsStocked] = useState(true)

  function handleClickStockOrNot () {
    setIsStocked(!isStocked)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={ image ? image : "https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
        <button 
          className={isStocked ? "primary" : ""} 
          onClick={handleClickStockOrNot}
        >
          {isStocked ? "In Stock" : "Out of Stock" }
        </button>
    </li>
  );
}

export default PlantCard;
