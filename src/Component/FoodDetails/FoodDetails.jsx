import React from "react";

const FoodDetails = ({ food }) => {
  if (!food) return <div>Food not found</div>;  // Handle case when food is not found

  return (
    <div>
      <h1>{food.name}</h1>
      <img src={food.image} alt={food.name} />
      <p>{food.description}</p>
      <h3>Price: ${food.price}</h3>
    </div>
  );
};

export default FoodDetails;
