import React from "react";
import style from "../navbar/NavBar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import CountryDropDownDiv from "../dropdowndivs/CountryDropDownDiv";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import LoginModal from "../loginmodal/LoginModal";
import SignUpModal from "../signupmodal/SignUpModal";
import logo from "../../assets/main.png";
function NavBar({ showFull }) {
  const { t, i18n } = useTranslation();
  const [countryCode, setCountryCode] = useState("IN");
  const [langCode, setLangCode] = useState();
  const [loginshow, setLoginShow] = useState(false);
  const [signupShow, setsignupShow] = useState(false);

  useEffect(() => {
    setLangCode(i18n.language);
  }, [i18n.language]);
  return (
    <>
      <div
        className={`container-fluid fixed-top d-flex ${style.navbar} ${
          showFull && style.navbar_full
        }`}
      >
        <div className="row w-100 d-flex justify-content-between">
          <div className={`col-md-3 col-3 px-5 ${style.logodiv}`}>
            <img src={logo} alt="" style={{ height: "100%", width: "100px" }} />
          </div>
          <div
            className={` col-md-5 col-5 d-none d-sm-block ${style.optionsdiv} ${
              !showFull && style.optionsdiv_hidden
            }`}
          >
            <Link to="/flights" className={`col-md-2 col-6 ${style.aTagStyle}`}>
              {t("navbar.navbarOptions.flights")}
            </Link>
            <Link to="/hotels" className={`col-md-2 col-6 ${style.aTagStyle}`}>
              {t("navbar.navbarOptions.hotels")}
            </Link>
            <Link
              to="#"
              className={`col-md-8 ${style.wegoproLink} ${style.aTagStyle}`}
            >
              {t("navbar.navbarOptions.wegoPro")}
            </Link>
          </div>
          <div className={`col-md-4 col-4 ${style.dropdowndiv}`}>
            <Dropdown className={`${style.countryDropdown}`}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className={`${
                  showFull ? style.dropdownbutton_full : style.dropdownbutton
                }  ${langCode === "ar" ? style.dbtn1_ar: style.dbtn1_en }`}
              >
                {countryCode}
              </Dropdown.Toggle>
              <DropdownMenu as="div" align="end">
                <CountryDropDownDiv onClickFunction={setCountryCode} />
              </DropdownMenu>
            </Dropdown>
            <Dropdown className={`${style.languageDropdown}`}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className={`${
                  showFull ? style.dropdownbutton_full : style.dropdownbutton
                } ${style.dbtn2}`}
              >
                {langCode}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => i18n.changeLanguage("en")}>
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => i18n.changeLanguage("ar")}>
                  Arabic
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className={`${style.currencyDropdown}`}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className={`${
                  showFull ? style.dropdownbutton_full : style.dropdownbutton
                } ${langCode === "ar" ? style.dbtn3_ar : style.dbtn3_en}`}
              >
                INR
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
            <div
              className={`${
                showFull ? style.dropdownbutton_full : style.dropdownbutton
              } pt-1`}
              style={{
                height: "28px",
                borderRadius: "20px",
                marginLeft: "5px",
                cursor: "pointer",
              }}
            >
              <p
                style={{ fontSize: "14px" }}
                onClick={() => setLoginShow(true)}
              >
                LOGIN
              </p>
            </div>
          </div>
        </div>
      </div>
      {loginshow && (
        <LoginModal
          show={loginshow}
          setShow={setLoginShow}
          setsignupShow={setsignupShow}
        />
      )}
      {signupShow && (
        <SignUpModal
          show={signupShow}
          setShow={setsignupShow}
          setLoginShow={setLoginShow}
        />
      )}
    </>
  );
}

export default NavBar;
