import React from "react";
import "./Footer.css";
import p1 from "../../assets/images/slider/s4.jpg";
import p2 from "../../assets/images/payment.jpg";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="over-lay"></div>
      <img src={p1} alt="" />
      <div className="content">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-md-4 col-sm-12 f-widget">
              <a href="#" className="logo">
                foodieApp
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                aperiam labore omnis quod laboriosam nisi obcaecati, molestiae
                ipsum vel praesentium mollitia consectetur, dolorem possimus.
                Corporis rerum harum suscipit temporibus quae.
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 f-widget">
              <h4>Contact</h4>
              <ul>
                <li>
                  <i className="bi bi-geo-alt"></i>
                  1st Building, Road#Demo, Dhaka, Bangladesh.
                </li>
                <li>
                  <i className="bi bi-telephone"></i>
                  +880 123456
                </li>
                <li>
                  <i className="bi bi-envelope"></i>
                  example@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 f-widget">
              <h4>Important Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Company</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Products</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Offers</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">About</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 f-widget">
              <h4>Social Links</h4>
              <div className="social">
                <a href="#" className="icon d-inline-block">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="icon d-inline-block">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="icon d-inline-block">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#" className="icon d-inline-block">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="icon d-inline-block">
                  <i className="bi bi-pinterest"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="f-middle">
                    <h6>Category:</h6>
                    <div className="category">
                        <a href="#">Fruits</a><span>|</span>
                        <a href="#">Cake</a><span>|</span>
                        <a href="#">Pasta</a><span>|</span>
                        <a href="#">Noodles</a><span>|</span>
                        <a href="#">Sandwitch</a><span>|</span>
                        <a href="#">Rolls</a><span>|</span>
                        <a href="#">Salad</a><span>|</span>
                        <a href="#">Desserts</a>
                    </div>
                </div>
                </div>
            <div className="col-lg-12 col-md-12 col-sm-12 m-0 pt-2">
              <div className="ex-footer">
                <div className="payment">
                  <img src={p2} alt="" className="img-fluid" />
                </div>
                <div>
                  <p>
                    {" "}
                    &copy; 2024 <a href="#">foodieApp</a> | All Rights Reserved.
                    <span className="d-block" style={{ fontSize: "12px" }}>
                      <i class="bi bi-pen"></i> Rubel
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
