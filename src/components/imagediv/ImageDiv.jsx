import React from "react";
import style from "../imagediv/ImageDiv.module.css";
import { useTranslation } from "react-i18next";
function ImageDiv() {
  const { t } = useTranslation();
  return (
    <div className={`col-12 d-flex justify-content-center ${style.main}`}>
      <h1 className={`${style.heading}`}>{t("image_div_heading")}</h1>
    </div>
  );
}

export default ImageDiv;
