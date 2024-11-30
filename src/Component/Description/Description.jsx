import React, { useContext } from "react";
import "./Description.css";
import { StoreContext } from "../../Context/StoreContext";
import { useParams } from "react-router-dom";

const Description = () => {
  const { foodList } = useContext(StoreContext);
  const { id } = useParams();

  // Find the food item by id
  const foodItem = foodList.find((item) => item.f_id === parseInt(id));
  const { description } = foodItem;

  return (
    <div className="container pt-5 pb-5">
      <div className="descritption-box">
        <div className="d-flex">
          <h6
            className="py-2 px-3"
            style={{
              backgroundColor: "#70ac11",
              color: "white",
            }}
          >
            Description
          </h6>
          <h6 className="py-2 px-3">Reviews (100)</h6>
        </div>
        <div className="border p-2">
          <p className="p-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
