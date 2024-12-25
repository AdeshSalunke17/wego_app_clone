import React, { useEffect, useRef } from "react";
import style from "./HotelFormInputs.module.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useState } from "react";
import RoomDiv from "./RoomDiv";
import { CiCirclePlus } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
function HotelFormInputs() {
  const [viewDropdown, setViewDropdown] = useState(false);
  const [numberOfRoomDiv, setNumberOfRoomDiv] = useState(1);
  const [totalNumberOfGuests, setTotalNumberOfGuests] = useState(1);
  const ref = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickedOutsideDiv, true);
  }, []);
  const handleClickedOutsideDiv = (e) => {
    try {
      if (!ref.current.contains(e.target)) setViewDropdown(false);
    } catch (error) {
      console.log(error);
    }
  };
  const numberOfRoomDivArray = new Array(numberOfRoomDiv);
  for (let i = 0; i < numberOfRoomDivArray.length; i++) {
    numberOfRoomDivArray[i] = true;
  }
  return (
    <div className={`w-100 d-flex flex-wrap ${style.main}`}>
      <div className={`col-lg-5 col-12 ${style.inputDiv}`}>
        <input
          type="text"
          className={`${style.inputElement} `}
          placeholder="Destination"
        />
      </div>
      <div className={`col-lg-4 col-12 ${style.dateDiv}`}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateRangePicker"]}>
            <DateRangePicker
              localeText={{ start: "Check-In", end: "Check-Out" }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className={`col-lg-3 col-12 ${style.dropdownDiv}`}>
        <div
          className={`w-100 ${style.dropdownContainer}`}
          onClick={() => setViewDropdown(true)}
        >
          <label
            style={{
              fontSize: "12px",
              fontWeight: "400",
              color: "rgb(196, 196, 196)",
            }}
          >
            Guests and Rooms
          </label>
          <IoMdArrowDropdown
            style={{
              float: "right",
              fontSize: "24px",
              color: "rgb(196, 196, 196)",
            }}
          />
          <h6 style={{ fontWeight: "400" }}>
            {totalNumberOfGuests}{" "}
            {totalNumberOfGuests === 1 ? "Adult" : "Guests"} in{" "}
            {numberOfRoomDiv} Rooms
          </h6>
        </div>
        <div className={`${style.abc} ${viewDropdown && style.view}`} ref={ref}>
          {numberOfRoomDivArray.map((result, index) => {
            return (
              <RoomDiv
                numberOfRoomDiv={numberOfRoomDiv}
                setNumberOfRoomDiv={setNumberOfRoomDiv}
                number={index + 1}
                setTotalNumberOfGuests={setTotalNumberOfGuests}
              />
            );
          })}
          <div className={`${style.abcFooterDiv}`}>
            <button
              onClick={() => setNumberOfRoomDiv((prev) => prev + 1)}
              disabled={numberOfRoomDiv === 10 ? true : false}
              className={`${
                numberOfRoomDiv === 10 && style.footerDisableButton
              }`}
            >
              <CiCirclePlus style={{ fontSize: "17px" }} /> Add Room
            </button>
            <button style={{ float: "right" }}>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelFormInputs;
