import React from "react";
import Slider from "react-slick";
import Card from "../cardsdiv/Card";
import { IoIosArrowForward } from "react-icons/io";

import { IoIosArrowBack } from "react-icons/io";

const cardData = [
  {
    id: 1,
    path: "https://www.wego.co.in/visas/?wg_source=Onsite&wg_medium=carousel&wg_campaign=visa-desktop",
    imgurl:
      "https://zen.wego.com/marketing/carousel/Artboard%203%20(1)_313338516.png",
  },
  {
    id: 2,
    path: "https://www.wego.co.in/flights?provider_codes=travomint&wg_source=merchflights&wg_medium=carousel&wg_campaign=travomint-desktop",
    imgurl:
      "https://zen.wego.com/marketing/carousel/travomint%20(1)_313346804.jpg",
  },
  {
    id: 3,
    path: "https://www.wego.co.in/flights?provider_codes=travomint&wg_source=merchflights&wg_medium=carousel&wg_campaign=travomint-desktop",
    imgurl: "https://zen.wego.com/marketing/carousel/yatra_295889557.jpg",
  },
  {
    id: 4,
    path: "https://www.wego.co.in/flights?provider_codes=travomint&wg_source=merchflights&wg_medium=carousel&wg_campaign=travomint-desktop",
    imgurl:
      "https://zen.wego.com/marketing/carousel/Color%20Options_295889833.jpg",
  },
  {
    id: 5,
    path: "https://www.wego.co.in/flights?provider_codes=travomint&wg_source=merchflights&wg_medium=carousel&wg_campaign=travomint-desktop",
    imgurl:
      "https://zen.wego.com/marketing/carousel/Tripodeal%20(1)_305041476.jpg",
  },
];
export const CardsDiv2 = () => {
  const settings = {
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container p-5">
      <Slider {...settings}>
        {cardData.map((img) => {
          return (
            <div className="p-3" key={img.id}>
              <Card imgurl={img.imgurl} path={img.path} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="shadow"
      style={{
        borderRadius: "100%",
        padding: "3px 8px",
        fontSize: "larger",
        backgroundColor: "white",
        border: "transparent",
        color: "rgb(21, 248, 21)",
        position: "relative",
        float: "right",
        top: "-135px",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="shadow"
      style={{
        borderRadius: "100%",
        padding: "3px 8px",
        fontSize: "larger",
        backgroundColor: "white",
        border: "transparent",
        color: "rgb(21, 248, 21)",
        position: "relative",
        top: "115px",
        zIndex: "1",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </button>
  );
}
