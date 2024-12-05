import React, { useContext, useEffect, useState } from "react";
import "./Checkout.css";
import p1 from "../../assets/images/slider/s1.jpg";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import { StoreContext } from "./../../Context/StoreContext";
import { useForm } from "react-hook-form";

const Checkout = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => setCountries(data))
        .catch((error) => console.error("Error fetching countries:", error));
    }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const { cart, foodList } = useContext(StoreContext);

  // Helper function to get item details from the food list using the item id
  const getItemDetails = (id) => {
    return foodList.find((item) => item.f_id === id);
  };

  // Calculate Sub Total
  const calculateSubtotal = () => {
    return Object.keys(cart).reduce((acc, id) => {
      const item = getItemDetails(Number(id));
      if (item) {
        acc += item.price * cart[id];
      }
      return acc;
    }, 0);
  };

  // Calculate Shipping Fee (This can be dynamic depending on your business logic)
  const calculateShippingFee = () => {
    return 5; // Example static fee, this can be adjusted or fetched dynamically
  };

  // Calculate Total
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shippingFee = calculateShippingFee();
    return subtotal + shippingFee;
  };

  return (
    <div>
      <Breadcrumb title="Checkout" bgImg={p1} />
      <div className="container pt-5 pb-5 checkout">
        <div className="row g-4">
          <div className="col-lg-8 col-md-7 col-sm-12">
            <div className="form-section">
              <h5>Shipping Information</h5>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">
                      First Name <span>*</span>
                    </label>
                    <input
                      {...register("fName", {
                        required: "This field is required",
                        minLength: {
                          value: 3,
                          message: "Minimum 3 characters",
                        },
                      })}
                      type="text"
                      className={`form-control ${
                        errors.fName ? "is-invalid" : ""
                      }`}
                    />
                    {errors.fName && (
                      <div className="invalid-feedback">
                        {errors.fName.message}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                  <label className="form-label">
                      Middle Name
                    </label>
                    <input type="text"  className="form-control"/>
                    </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">
                      Last Name <span>*</span>
                    </label>
                    <input
                      {...register("lName", {
                        required: "This field is required",
                        minLength: {
                          value: 3,
                          message: "Minimum 3 characters",
                        },
                      })}
                      type="text"
                      className={`form-control ${
                        errors.lName ? "is-invalid" : ""
                      }`}
                    />
                    {errors.lName && (
                      <div className="invalid-feedback">
                        {errors.lName.message}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label className="form-label">Email</label>
                    <input
                      {...register("email", {
                        required: "This field is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label className="form-label">
                      Phone <span>*</span>
                    </label>
                    <input
                      {...register("phone", {
                        required: "This field is required",
                        minLength: {
                          value: 10,
                          message: "Minimum 10 characters",
                        },
                      })}
                      type="text"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">
                        {errors.phone.message}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Country</label>
                    <select {...register("country", { required: "This field is required" })} 
                    className={`form-select ${errors.country ? "is-invalid" : ""}`}>
                      <option value="">
                        Choose a country
                      </option>
                      {countries.map((country) => (
                        <option key={country.cca3} value={country.cca3}>
                          {country.name.common}
                        </option>
                      ))}
                    </select>
                    {errors.country && <div className="invalid-feedback">{errors.country.message}</div>}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">
                      Address <span>*</span>
                    </label>
                    <input
                      {...register("address", {
                        required: "This field is required",
                        minLength: {
                          message: "This field is required",
                        },
                      })}
                      type="text"
                      className={`form-control ${
                        errors.address ? "is-invalid" : ""
                      }`}
                    />
                    {errors.address && (
                      <div className="invalid-feedback">
                        {errors.address.message}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">
                      Zip-code <span>*</span>
                    </label>
                    <input
                      {...register("zipcode", {
                        required: "This field is required",
                        minLength: {
                          message: "This field is required",
                        },
                      })}
                      type="text"
                      className={`form-control ${
                        errors.zipcode ? "is-invalid" : ""
                      }`}
                    />
                    {errors.zipcode && (
                      <div className="invalid-feedback">
                        {errors.zipcode.message}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <label className="form-label">Details</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end mt-4">
                <button type="submit" className="myBtn">
                  Checkout
                </button>
              </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12">
            <div className="cart-total">
              <h4 className="mb-4">Cart Total</h4>
              <div className="d-flex justify-content-between border-bottom mb-2">
                <p>Sub Total</p>
                <p>${calculateSubtotal().toFixed(2)}</p>
              </div>
              <div className="d-flex justify-content-between border-bottom mb-2">
                <p>Shipping Fee</p>
                <p>${calculateShippingFee()}</p>
              </div>
              <div className="d-flex justify-content-between border-bottom mb-4">
                <h6>Total</h6>
                <h6>${calculateTotal().toFixed(2)}</h6>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
