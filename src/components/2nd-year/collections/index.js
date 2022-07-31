import React from "react";
import './SecondYearCollections.css';
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";
import Item from '../../1st-year/collections/item/index';
import { SecondYearItems } from "../../subjects/index";

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>
};

const SecondYearCollections =()=>{
  return(
    <div className="collection">
      <div className="max-width">
        <div className="collection-title">Happy Learning!</div>
        <Slider {...settings}>
          {SecondYearItems.map((item)=>{
            return <Item item={item}/>;
          })}
        </Slider>


      </div>
    </div>
  );
}

export default SecondYearCollections;