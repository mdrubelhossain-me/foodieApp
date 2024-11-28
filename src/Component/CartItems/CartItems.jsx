import React from "react";
import "./CartItem.css";
import p1 from "../../assets/images/desserts/d1.jpg";
const CartItems = () => {
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
                <tr>
                  <td className="text-center">
                    <img src={p1} className="cart-img img-fluid" alt="" />
                  </td>
                  <td>name</td>
                  <td>$0</td>
                  <td>0</td>
                  <td>$0</td>
                  <td className="text-center">
                    <button
                      title="Remove"
                      className="btn btn-outline-danger btn-sm"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
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
                <p>0</p>
              </div>
              <div className="d-flex justify-content-between border-bottom mb-2">
                <p>Shipping Fee</p>
                <p>0</p>
              </div>
              <div className="d-flex justify-content-between border-bottom mb-4">
                <h6>Total</h6>
                <h6>0</h6>
              </div>
              <div>
                <button className="myBtn m-0">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
