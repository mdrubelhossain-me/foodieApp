import React from "react";
import "./Cart.css";
import CartItems from "../../Component/CartItems/CartItems";
import p1 from "../../assets/images/slider/s3.jpg";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";

const Cart = () => {
  return (
    <div>
      <Breadcrumb title="Cart" bgImg={p1} />
      <div>
        <CartItems />
      </div>
    </div>
  );
};

export default Cart;
