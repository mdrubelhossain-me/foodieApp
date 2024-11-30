import './FoodDetails.css'
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import Breadcrumb from './../Breadcrumb/Breadcrumb';
import p1 from '../../assets/images/slider/s4.jpg'
import Description from '../Description/Description';

const FoodDetails = () => {
  const { foodList } = useContext(StoreContext);
  const { id } = useParams();

  // Find the food item by id
  const foodItem = foodList.find((item) => item.f_id === parseInt(id));

  if (!foodItem) {
    return <div>Food item not found.</div>;
  }

  const { name, image, price, description, category } = foodItem;

  return (
    <div>
      <Breadcrumb title="Details" bgImg={p1} />
      <div className="container">
        <div className="product-details pt-5 pb-5">
          <div className="row g-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex gap-3">
                <div className="sm-img-section">
                  <div className="sm-img">
                    <img src={image} className="img-fluid" alt={name} />
                  </div>
                  <div className="sm-img">
                    <img src={image} className="img-fluid" alt={name} />
                  </div>
                  <div className="sm-img">
                    <img src={image} className="img-fluid" alt={name} />
                  </div>
                  <div className="sm-img">
                    <img src={image} className="img-fluid" alt={name} />
                  </div>
                </div>
                <div className="full-img">
                  <img src={image} className="img-fluid" alt={name} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <h5>{name}</h5>
              </div>
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
              <div className="price">
                <h6>${price}</h6>
              </div>
              <p className="description">
                {description}
              </p>
              <div className="category mt-4">
                <h6>Category: </h6>
                <span>{category}</span>
              </div>
            </div>
          </div>
          <Description/>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
