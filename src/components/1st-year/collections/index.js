import React from "react";
import './FirstYearCollections.css';
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";
import Item from './item/index';
import FirstYearItems from "../../subjects/index";

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>
};

const FirstYearCollections =()=>{
  return(
    <div className="collection">
      <div className="max-width">
        <div className="collection-title">Happy Learning!</div>
        <Slider {...settings}>
          {FirstYearItems.map((item)=>{
            return <Item item={item}/>;
          })}
        </Slider>


      </div>
    </div>
  );
}

export default FirstYearCollections;