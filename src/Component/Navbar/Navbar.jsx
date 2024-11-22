import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* Desktop Navigation Start  */}
      <div class="desktop-navigation">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand" href="#">
              foodieApp
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Menu
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact us
                  </a>
                </li>
              </ul>
              <div className="ms-auto right-section">
                <button data-bs-toggle="modal" data-bs-target="#searchModal">
                  <i class="bi bi-search"></i>
                </button>

                <button type="button" class="position-relative mx-4">
                  <i className="bi bi-cart"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
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
      <div class="mobile-navigation">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <button
                className="n-toggle-btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#navOffcanvas"
                aria-controls="navOffcanvas"
              >
                <i class="bi bi-list"></i>
              </button>
            </div>
            <div className="ms-auto right-section">
              <button data-bs-toggle="modal" data-bs-target="#searchModal">
                <i class="bi bi-search"></i>
              </button>

              <button type="button" class="position-relative mx-4">
                <i className="bi bi-cart"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
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
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="navOffcanvas"
        aria-labelledby="navOffcanvasLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body container">
          <div className="text-center">
            <a href="" className="logo">
              foodieApp
            </a>
          </div>
          <div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Menu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal Start  */}
      <div
        class="modal fade"
        id="searchModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content p-3">
            <div className="d-flex justify-content-end">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
