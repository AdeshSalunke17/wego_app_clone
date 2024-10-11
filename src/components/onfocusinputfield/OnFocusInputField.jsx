import React, { useCallback, useEffect, useRef } from "react";
import style from "./OnFocusInputField.module.css";
import { motion } from "framer-motion";
function OnFocusInputField({ setOnFocusInputShow, options }) {
  const ref = useRef(null);
  const handleClickedOutsideDiv = useCallback((e) => {
    try {
      if (!ref.current.contains(e.target)) setOnFocusInputShow(false);
    } catch (error) {
      console.log(error);
    }
  }, [setOnFocusInputShow]);
  useEffect(() => {
    document.addEventListener("click", handleClickedOutsideDiv, true);
     // Cleanup event listener on component unmount
     return () => {
      document.removeEventListener("click", handleClickedOutsideDiv, true);
    };
  }, [handleClickedOutsideDiv]);
  // const handleClickedOutsideDiv = (e) => {
  //   try {
  //     if (!ref.current.contains(e.target)) setOnFocusInputShow(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <motion.div
      className={`col-4 shadow rounded ${style.main}`}
      ref={ref}
      initial={{
        width: "100px",
      }}
      animate={{
        opacity: 1,
        width: "500px",
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <div className="w-100 p-3" style={{ height: "100px" }}>
        <input type="text" className={`w-100 ${style.inputElement}`} />
      </div>
      <div className="w-100 p-3" style={{ height: "200px" }}>
        <h6>Popular Cities</h6>
        <div className="options d-flex flex-wrap">
          {options.map((option) => {
            return (
              <div className="col-3 d-flex justify-content-center">
                <p>{option}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default OnFocusInputField;
