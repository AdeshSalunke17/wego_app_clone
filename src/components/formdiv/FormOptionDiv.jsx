import React from "react";
import { Link } from "react-router-dom";
import style from "../formdiv/FormOptionDiv.module.css";
import { MdFlight } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
function FormOptionDiv({ urlref }) {
  const { t } = useTranslation();
  const { options } = t("form_option_div");
  return (
    <div className={`${style.main} d-flex`}>
      <div style={{ width: "140px" }}>
        <button
          className={`${
            urlref === "/flights"
              ? style.buttonStyle_normal
              : style.buttonStyle_glassEffect
          } ${style.btn_1}`}
        >
          <Link to="/flights" className={`${style.aTagStyle}`}>
            {" "}
            <MdFlight style={urlref === "/flights" && { color: "green" }} />
            {options.flights.heading}
          </Link>
        </button>
      </div>
      <div style={{ width: "140px" }}>
        <button
          className={`${
            urlref === "/hotels"
              ? style.buttonStyle_normal
              : style.buttonStyle_glassEffect
          }`}
        >
          <Link to="/hotels" className={`${style.aTagStyle}`}>
            <RiHotelFill style={urlref === "/hotels" && { color: "green" }} />
            {options.hotels.heading}
          </Link>
        </button>
      </div>
      <div style={{ width: "140px" }} className={`${style.trainDiv}`}>
        <button className={`${style.buttonStyle_glassEffect} ${style.btn_3}`}>
          <Link to="#" className={`${style.aTagStyle}`}>
            {options.trains.heading}
          </Link>
        </button>
      </div>
    </div>
  );
}

export default FormOptionDiv;
