import React, { useState } from "react";
import "./LoginSignup.css";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  // State to toggle between login and signup
  const [isLogin, setIsLogin] = useState(true);

  const togglePassword = () => {
    const passwordInput = document.getElementById("password");
    const icon = document.getElementById("password-show-icon");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.replace("bi-eye", "bi-eye-slash");
    } else {
      passwordInput.type = "password";
      icon.classList.replace("bi-eye-slash", "bi-eye");
    }
  };

  return (
    <section className="login-section pt-5 pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="login-form-body">
              <div className="mb-4 text-center">
                <Link className="logo" to="/">
                  foodieApp
                </Link>
              </div>

              <div className="mt-5">
                <form>
                  {/* Conditional fields based on the form type */}
                  {!isLogin && (
                    <>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Phone"
                          required
                        />
                      </div>
                  </>)}

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <div className="input-group">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        required
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="password-show-icon"
                          onClick={togglePassword}
                          aria-label="Toggle password visibility"
                        >
                          <i id="password-show-icon" className="bi bi-eye"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <button
                      type="submit"
                      className="myBtn w-100 rounded-25 m-0"
                    >
                      {isLogin ? "SignIn" : "Continue"}
                    </button>
                  </div>
                  <div className="mb-3 text-center">
                    <p>
                      {isLogin ? (
                        <>
                          Don't have an account? 
                          <Link 
                            to="#" 
                            style={{ color: "#70ac11", paddingLeft: "8px" }} 
                            onClick={() => setIsLogin(false)}>
                            Create an Account
                          </Link>
                        </>
                      ) : (
                        <>
                          Already have an account? 
                          <Link 
                            to="#" 
                            style={{ color: "#70ac11", paddingLeft: "8px" }} 
                            onClick={() => setIsLogin(true)}>
                            SignIn here
                          </Link>
                        </>
                      )}
                    </p>
                  </div>
                  {!isLogin && (
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input mt-1"
                          type="checkbox"
                        />
                        <label className="form-check-label">
                          By continuing, I agree to terms of use & privacy policy
                        </label>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;
