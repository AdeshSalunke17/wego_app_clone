import React from "react";
import style from "../flightform/MultiCityTravelForm.module.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LuArrowRightLeft } from "react-icons/lu";
import { MdCancel } from "react-icons/md";
function MultiCityTravelForm({ repeatindDivCount, setRepeatingDivCount }) {
  let ref = new Array(repeatindDivCount);
  for (let i = 0; i < ref.length; i++) {
    ref[i] = i;
  }
  const handleCancelButton = () => {
    setRepeatingDivCount((prev) => prev - 1);
  };
  return (
    <div className={`${style.main}`}>
      {ref.map((a, index) => {
        return (
          <div className={`${style.repeatingDiv}`} key={index}>
            <div className={`${style.inputDiv}`}>
              <input
                type="text"
                className={`${style.inputElement}`}
                placeholder="From"
              />
              <div className={`${style.exchangeButtonDiv}`}>
                <button className={`${style.exchangeButton}`}>
                  <LuArrowRightLeft />
                </button>
              </div>
              <input
                type="text"
                className={`${style.inputElement}`}
                placeholder="To"
              />
            </div>
            <div className={`${style.dateDiv}`}>
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="Depart" />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              {repeatindDivCount > 2 ? (
                <MdCancel
                  className={`${style.cancelActiveButton}`}
                  onClick={handleCancelButton}
                />
              ) : (
                <MdCancel className={`${style.cancelDisableButton}`} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MultiCityTravelForm;
