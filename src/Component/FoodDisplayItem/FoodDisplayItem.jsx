import React from "react";
import "./FoodDisplayItem.css";

const FoodDisplayItem = ({ id, name, image, price, description }) => {

    const truncateText = (text, wordLimit = 6) => {
        const words = text.split(" ");
        return words.length > wordLimit
          ? words.slice(0, wordLimit).join(" ") + "..."
          : text;
      };

  return (
      <div className="food-item-card">
        <div className="card">
          <div className="food-photo">
            <img src={image} alt="" />
          </div>
          <div className="card-body">
            <a href="#" className="d-block">
            {truncateText(name, 6)}
            </a>
            <div className="d-flex gap-2 review-section">
              <div className="rating">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
              </div>
              <div>
                <span>(100)</span>
              </div>
            </div>
            <h6 className="price">${price}</h6>
            <p>{truncateText(description, 6)}</p>
          </div>
        </div>
      </div>
  );
};

export default FoodDisplayItem;
