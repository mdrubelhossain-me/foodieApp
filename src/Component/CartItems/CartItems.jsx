import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItems = () => {
  const { cart, foodList, removeFromCart } = useContext(StoreContext);

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
      <div className="container pt-5 pb-5">
        <div className="product-cart">
          <div className="table-responsive">
            <table className="table table-bordered align-middle table-hover">
              <thead>
                <tr>
                  <td className="text-center">Products</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Total</td>
                  <td className="text-center">Action</td>
                </tr>
              </thead>
              <tbody>
                {Object.keys(cart).map((id) => {
                  const item = getItemDetails(Number(id));
                  if (item) {
                    return (
                      <tr key={id}>
                        <td className="text-center">
                        <Link to={`/food/${id}`}>
                          <img
                            src={item.image}
                            className="cart-img img-fluid"
                            alt={item.name}
                          />
                          </Link>
                        </td>
                        <td className="name">{item.name}</td>
                        <td>${item.price}</td>
                        <td>{cart[id]}</td>
                        <td>${item.price * cart[id]}</td>
                        <td className="text-center">
                          <button
                            title="Remove"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => removeFromCart(Number(id))}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>

          <div className="row g-5 mt-3 pb-3">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <form role="search">
                <label className="form-label">Have you any promo code?</label>
                <div className="d-flex">
                  <input
                    className="form-control rounded-0"
                    placeholder="Enter Code"
                  />
                  <button className="myBtn m-0 rounded-0" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h4 className="mb-3">Cart Total</h4>
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
              <div>
                <Link to="/checkout" className="myBtn m-0 text-decoration-none">Proceed to Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
