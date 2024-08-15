import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "./LoginModal.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
function LoginModal({ show, setShow, setsignupShow }) {
  const [displayButton, setDisplayButton] = useState(false);
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
      style={{ left: "50px" }}
      animation={false}
    >
      <Modal.Body className="modal-content">
        <div className="loginMain">
          <div className="header w-100 ">
            <p style={{ fontSize: "20px", fontWeight: "400" }}>
              Log in to Wego
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "400",
                color: "rgb(173, 173, 173)",
              }}
            >
              Don't have an account?{" "}
              <u style={{ color: "green" }}>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShow(false);
                    setsignupShow(true);
                  }}
                >
                  Sign up
                </span>
              </u>
            </p>
          </div>
          <div className="loginForm">
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
                  Login with Facebook
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
                    Sign in with Google
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
                  style={{ width: "80px", position: "relative", bottom: "4px" }}
                />
                <p style={{ fontSize: "15px" }}>or login using your email</p>
                <hr
                  style={{ width: "80px", position: "relative", bottom: "4px" }}
                />
              </div>
            </div>
            <div className="w-100 d-flex form1">
              <input type="text" className="w-100 myInput" />
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="col-12" style={{ height: "20px" }}></div>
              <input type="text" className="w-100 myInput" />
              <label htmlFor="email" className="label">
                Password
              </label>
            </div>
            <div
              className="w-100"
              style={{
                height: "80px",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <p style={{ fontSize: "15px", color: "#44b50c" }}>
                <u>Forgot your password?</u>
              </p>
              <p
                style={{
                  fontSize: "15px",
                  color: "#44b50c",
                  position: "relative",
                }}
              >
                <u>Didn't receive the confirmation email?</u>
              </p>
              <button
                className="w-100 py-2 rounded mt-2"
                style={{
                  backgroundColor: "#44b50c",
                  border: "transparent",
                  color: "white",
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
