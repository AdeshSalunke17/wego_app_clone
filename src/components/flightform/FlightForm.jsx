import React from "react";
import { useState } from "react";
import style from "../flightform/FlightForm.module.css";
import OneWayFlightForm from "./OneWayFlightForm";
import RoundTripFlightForm from "./RoundTripFlightForm";
import MultiCityTravelForm from "./MultiCityTravelForm";
import PassengerDropDown from "../passengerdropdown/PassengerDropDown";
import ClassDropDown from "../classdropdown/ClassDropDown";
import PaymentDropDown from "../paymentdropdown/PaymentDropDown";
import { useTranslation } from "react-i18next";
function FlightForm() {
  const [repeatindDivCount, setRepeatingDivCount] = useState(3);
  const [whichFormToShow, setWhichFormToShow] = useState("Round-trip");
  const { t } = useTranslation();
  const { options } = t("form_option_div");
  return (
    <div className={`${style.main}`}>
      <div className={`w-100 d-flex flex-wrap ${style.buttonDiv}`}>
        <div className="col-lg-6 col-12 py-2">
          <span>
            <button
              className={`${
                whichFormToShow === "One-way"
                  ? style.buttonStyleAfterEffect
                  : style.buttonStyle
              }`}
              onClick={() => setWhichFormToShow("One-way")}
            >
              {options.flights.options.one_way}
            </button>
            <button
              className={`${
                whichFormToShow === "Round-trip"
                  ? style.buttonStyleAfterEffect
                  : style.buttonStyle
              } ${style.btn_2}`}
              onClick={() => setWhichFormToShow("Round-trip")}
            >
              {options.flights.options.round_trip}
            </button>
            <button
              className={`${
                whichFormToShow === "Multi-city"
                  ? style.buttonStyleAfterEffect
                  : style.buttonStyle
              } ${style.btn_3}`}
              onClick={() => setWhichFormToShow("Multi-city")}
            >
              {options.flights.options.multi_city}
            </button>
          </span>
        </div>
        <div className="col-lg-6 col-12 py-2">
          {whichFormToShow === "Multi-city" && (
            <button
              className={
                repeatindDivCount <= 5
                  ? `${style.addButton}`
                  : `${style.addDisableButton}`
              }
              onClick={() => {
                setRepeatingDivCount((prev) => prev + 1);
              }}
              disabled={repeatindDivCount <= 5 ? false : true}
            >
              + Add Flight
            </button>
          )}
        </div>
      </div>
      {whichFormToShow === "One-way" && <OneWayFlightForm />}
      {whichFormToShow === "Round-trip" && <RoundTripFlightForm />}
      {whichFormToShow === "Multi-city" && (
        <MultiCityTravelForm
          repeatindDivCount={repeatindDivCount}
          setRepeatingDivCount={setRepeatingDivCount}
        />
      )}
      <div className={`${style.travelFooter}`}>
        <div className={`${style.checkBoxDiv} col-lg-4 col-md-12 col-12`}>
          <input type="checkbox" className={`${style.checkBoxElement}`} />
          <p>{options.flights.footer_div.check_box}</p>
        </div>
        <div className={`${style.dropDownDiv} col-lg-6 col-md-9 col-12 flex-wrap`}>
          <PassengerDropDown />
          <ClassDropDown />
          <PaymentDropDown />
        </div>
        <div className={`${style.submitButtonDiv} col-lg-2 col-md-3 col-12`}>
          <button className={`${style.searchButton}`}>
            {options.flights.footer_div.search}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlightForm;
