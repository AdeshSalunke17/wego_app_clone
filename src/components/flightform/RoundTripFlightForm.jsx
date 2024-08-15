import React, { useRef, useState } from "react";
import style from "../flightform/RoundTripFlightForm.module.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
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
function RoundTripFlightForm() {
  const [onFocusInput1, setOnFocusInput1Show] = useState(false);
  const [onFocusInput2, setOnFocusInput2Show] = useState(false);
  let from = useRef("");
  let to = useRef("");
  const change = () => {
    let ref = from.current.value;
    from.current.value = to.current.value;
    to.current.value = ref;
  };
  return (
    <div className={`${style.main} `}>
      <div className={`${style.inputDiv} col-lg-6 col-12`}>
        {!onFocusInput1 && (
          <input
            type="text"
            className={`${style.inputElement}`}
            placeholder="From"
            ref={from}
            onFocus={() => {
              setOnFocusInput1Show(true);
              setOnFocusInput2Show(false);
            }}
          />
        )}
        {onFocusInput1 && (
          <OnFocusInputField
            setOnFocusInputShow={setOnFocusInput1Show}
            options={inputOneOptions}
          />
        )}
        <div className={`${style.exchangeButtonDiv}`}>
          <button className={`${style.exchangeButton}`} onClick={change}>
            <LuArrowRightLeft />
          </button>
        </div>
        {!onFocusInput2 && (
          <input
            type="text"
            className={`${style.inputElement}`}
            placeholder="To"
            ref={to}
            onFocus={() => {
              setOnFocusInput2Show(true);
              setOnFocusInput1Show(false);
            }}
          />
        )}
        {onFocusInput2 && (
          <OnFocusInputField
            setOnFocusInputShow={setOnFocusInput2Show}
            options={inputTwoOptions}
          />
        )}
      </div>
      <div className={`${style.dateRangeDiv}  col-lg-6 col-12`}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateRangePicker"]}>
            <DateRangePicker localeText={{ start: "Depart", end: "Return" }} />
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default RoundTripFlightForm;
