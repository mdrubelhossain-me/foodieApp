import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div>
      {/* Desktop Navigation Start  */}
      <div className="desktop-navigation">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              foodieApp
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li
                  onClick={() => setMenu("home")}
                  className={`nav-item ${menu === "home" ? "active" : ""}`}
                >
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li
                  onClick={() => setMenu("menu")}
                  className={`nav-item ${menu === "menu" ? "active" : ""}`}
                >
                  <a className="nav-link" href="#">
                    Menu
                  </a>
                </li>
                <li
                  onClick={() => setMenu("about")}
                  className={`nav-item ${menu === "about" ? "active" : ""}`}
                >
                  <a className="nav-link" href="#">
                    About us
                  </a>
                </li>
                <li
                  onClick={() => setMenu("contact")}
                  className={`nav-item ${menu === "contact" ? "active" : ""}`}
                >
                  <a className="nav-link" href="#">
                    Contact us
                  </a>
                </li>
              </ul>
              <div className="ms-auto right-section">
                <button data-bs-toggle="modal" data-bs-target="#searchModal">
                  <i className="bi bi-search"></i>
                </button>

                <button type="button" className="position-relative mx-4">
                  <i className="bi bi-cart"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                    0
                  </span>
                </button>

                <a href="" className="btn btn-outline-light">
                  SignIn
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Desktop Navigation End  */}

      {/* Mobile Navigation Start */}
      <div className="mobile-navigation">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <button
                className="n-toggle-btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#navOffcanvas"
                aria-controls="navOffcanvas"
              >
                <i className="bi bi-list"></i>
              </button>
            </div>
            <div className="ms-auto right-section">
              <button data-bs-toggle="modal" data-bs-target="#searchModal">
                <i className="bi bi-search"></i>
              </button>

              <button type="button" className="position-relative mx-4">
                <i className="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  0
                </span>
              </button>

              <a href="" className="btn btn-outline-light">
                SignIn
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Navigation End  */}

      {/* Offcanvas Start  */}
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="navOffcanvas"
        aria-labelledby="navOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body container">
          <div className="text-center">
            <a href="" className="logo">
              foodieApp
            </a>
          </div>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal Start  */}
      <div
        className="modal fade"
        id="searchModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content p-3">
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Enter keyword..."
              />
            </div>
            <div className="d-flex justify-content-end">
              <button type="button" class="btn btn-primary mx-3 s-btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
