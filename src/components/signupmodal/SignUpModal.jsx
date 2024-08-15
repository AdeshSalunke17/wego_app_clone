import React from "react";
import Modal from "react-bootstrap/Modal";
import Banner from "./Banner";
import "./SignUpModal.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useEffect } from "react";

function SignUpModal({ show, setShow, setLoginShow }) {
  const [displayButton, setDisplayButton] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDisplayButton(true);
    }, 2000);
  }, []);

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="example-custom-modal-styling-title"
      animation={false}
    >
      <Modal.Body>
        <div className="signUpMain d-flex">
          <div className="formDiv col-7 bg-white">
            <div className="signForm">
              <div className="buttonsDiv d-flex w-100">
                <button className="fbButton w-100">
                  <p
                    style={{
                      color: "white",
                      fontSize: "18px",
                      float: "left",
                      marginLeft: "5px",
                      marginTop: "3px",
                    }}
                  >
                    <FaFacebook />
                  </p>
                  <p
                    style={{
                      float: "left",
                      marginLeft: "25px",
                      marginTop: "8px",
                      fontSize: "14px",
                      color: "white",
                    }}
                  >
                    Sign up with Facebook
                  </p>
                </button>
                {displayButton && (
                  <button className="googleButton w-100">
                    <p
                      style={{
                        color: "white",
                        fontSize: "18px",
                        float: "left",
                        marginLeft: "5px",
                        marginTop: "3px",
                      }}
                    >
                      <FcGoogle />
                    </p>
                    <p
                      style={{
                        float: "left",
                        marginLeft: "80px",
                        marginTop: "8px",
                        fontSize: "14px",
                        color: "rgb(70, 70, 70)",
                      }}
                    >
                      Sign up with Google
                    </p>
                  </button>
                )}
                <div
                  className="w-100 d-flex"
                  style={{
                    marginLeft: "7px",
                    position: "relative",
                    top: "5px",
                    height: "20px",
                  }}
                >
                  <hr
                    style={{
                      width: "80px",
                      position: "relative",
                      bottom: "6px",
                    }}
                  />
                  <p style={{ fontSize: "12px" }}>
                    or Sign up using your email
                  </p>
                  <hr
                    style={{
                      width: "80px",
                      position: "relative",
                      bottom: "6px",
                    }}
                  />
                </div>
              </div>
              <div className="w-100 d-flex form">
                <input type="text" className="w-100 myInput" />
                <label htmlFor="email" className="label">
                  Email
                </label>
                <div className="col-12" style={{ height: "20px" }}></div>
                <input type="text" className="w-100 myInput" />
                <label htmlFor="email" className="label">
                  Password
                </label>
                <div className="col-12" style={{ height: "20px" }}></div>
                <input type="text" className="w-100 myInput" />
                <label htmlFor="" className="label">
                  Repeat Password
                </label>
              </div>
              <div className="w-100 signupfooter d-flex">
                <input type="checkbox" checked={isChecked} />
                <p
                  style={{
                    fontSize: "14px",
                    position: "relative",
                    top: "2px",
                    left: "5px",
                  }}
                >
                  Yes, I want to receive promotions from Wego.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  By signing up you accept our{" "}
                  <span style={{ color: "#44b50c" }}>
                    <u>Terms</u>
                  </span>{" "}
                  and{" "}
                  <span style={{ color: "#44b50c" }}>
                    <u>Privacy Policy.</u>
                  </span>
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#44b50c",
                  }}
                >
                  <u>Didn't receive the confirmation email?</u>
                </p>
              </div>
              <div
                className="w-100"
                style={{ padding: "0px 30px 0px 30px", height: "110px" }}
              >
                <button
                  className="w-100 rounded py-2 mt-5"
                  style={{
                    backgroundColor: "#44b50c",
                    border: "transparent",
                    color: "white",
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="infoDiv col-5">
            <div className="infoDiv_header">
              <p style={{ fontSize: "20px", fontWeight: "400" }}>
                Sign up with Wego
              </p>
              <p style={{ fontSize: "13px", fontWeight: "400" }}>
                Have an account already?{" "}
                <u style={{ color: "green" }}>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setShow(false);
                      setLoginShow(true);
                    }}
                  >
                    login
                  </span>
                </u>
              </p>
              <hr
                style={{ width: "80%", position: "relative", left: "25px" }}
              />
            </div>
            <div className="infoDiv_info">
              <Banner
                logo="flash"
                heading="Faster booking via Wego"
                msg="Book flights quicker than ever via Wego"
              />
              <Banner
                logo="bell"
                heading="Price Alerts"
                msg="Never miss a great deal again - create your own alerts"
              />
              <Banner
                logo="tag"
                heading="Exclusive Offers"
                msg="Receive discounts and offers from our partners, exclusive to Wego members"
              />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;
