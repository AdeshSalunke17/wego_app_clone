import React, { useState } from "react";
import style from "../flightform/OneWayFlightForm.module.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LuArrowRightLeft } from "react-icons/lu";
import OnFocusInputField from "../onfocusinputfield/OnFocusInputField";

const inputOneOptions = [
  "New Delhi",
  "Kozhikode",
  "Mumbai",
  "Cochin",
  "Hyderabad",
  "Chennai",
  "Lucknow",
  "Trivandrum",
  "Bangalore",
  "Kannur",
  "Kolkata",
  "Mangalore",
  "Ahemdabad",
  "Tirichirapally",
  "Amritsar",
  "Patna",
];
const inputTwoOptions = [
  "Dubai",
  "Kuwait",
  "Riyadh",
  "Jeddah",
  "Abu Dhabi",
  "Dammam",
  "Sharjah",
  "Doha",
  "Muscat",
  "Bangkok",
  "Manama",
  "Singapore",
  "Kuala Lumpur",
  "Ras al khaim",
  "Toronto",
  "London",
];
function OneWayFlightForm() {
  const [onFocusInput1, setOnFocusInput1Show] = useState(false);
  const [onFocusInput2, setOnFocusInput2Show] = useState(false);
  return (
    <div className={`${style.main}`}>
      <div className={`${style.inputDiv} col-lg-9 col-12`}>
        {!onFocusInput1 ? (
          <input
            type="text"
            className={`${style.inputElement} `}
            placeholder="From"
            onFocus={() => {
              setOnFocusInput1Show(true);
              setOnFocusInput2Show(false);
            }}
          />
        ) : (
          <div className="col-6"></div>
        )}
        {onFocusInput1 && (
          <OnFocusInputField
            setOnFocusInputShow={setOnFocusInput1Show}
            options={inputOneOptions}
          />
        )}

        <div className={`${style.exchangeButtonDiv}`}>
          <button className={`${style.exchangeButton}`}>
            <LuArrowRightLeft />
          </button>
        </div>
        {!onFocusInput2 ? (
          <input
            type="text"
            className={`${style.inputElement}`}
            placeholder="To"
            onFocus={() => {
              setOnFocusInput2Show(true);
              setOnFocusInput1Show(false);
            }}
          />
        ) : (
          <div className="col-6"></div>
        )}
        {onFocusInput2 && (
          <OnFocusInputField
            setOnFocusInputShow={setOnFocusInput2Show}
            options={inputTwoOptions}
          />
        )}
      </div>
      <div className={`${style.dateDiv} col-lg-3 col-12`}>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Depart" />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
}

export default OneWayFlightForm;
