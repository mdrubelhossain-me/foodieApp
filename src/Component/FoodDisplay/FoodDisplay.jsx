import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodDisplayItem from "../FoodDisplayItem/FoodDisplayItem";

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);

  return (
    <div className="container pb-5">
      <h4 className="pb-4 pt-1 border-top">Top Favorite Food Near You</h4>
      <div className="food-display" id="food-display">
        <div className="display-item">
          {foodList.map((item, index) => {
           if(category==="All" || category===item.category){
            return (
              <FoodDisplayItem
                key={index}
                id={item.f_id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            );
           }
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
