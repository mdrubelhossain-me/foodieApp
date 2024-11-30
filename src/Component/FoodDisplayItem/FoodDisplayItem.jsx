// FoodDisplayItem.js
import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import "./FoodDisplayItem.css";

const FoodDisplayItem = ({ id, name, image, price, description }) => {
  const { cart, addToCart, removeFromCart } = useContext(StoreContext);
  const itemCount = cart[id] || 0; // Get the count for this item (or 0 if not in cart)

  // Helper function to truncate text
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
          <img src={image} alt={name} />
        </div>
        <div className="card-body">
          <p  className="d-block name">
            {truncateText(name, 6)}
          </p>
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2 review-section">
              <div className="rating">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
              <div>
                <span>(100)</span>
              </div>
            </div>
            <div>
              {itemCount === 0 ? (
                <button
                  onClick={() => addToCart(id)}
                  className="addTocart"
                  title="Add to Cart"
                >
                  <i className="bi bi-cart-plus"></i>
                </button>
              ) : (
                <div className="f-item-counter">
                  <button
                    onClick={() => removeFromCart(id)}
                    className="bg-danger"
                  >
                    -
                  </button>
                  <span>{itemCount}</span>
                  <button onClick={() => addToCart(id)} className="bg-success">
                    +
                  </button>
                </div>
              )}
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
