import React from 'react';
import leftArrow from "../images/leftArrow.svg";
import rightArrow from "../images/rightArrow.svg";

export default function sliderbutton({direction, moveSlide}){
    return(
        <button
            onClick={moveSlide}
            className= {direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction === "next" ? rightArrow : leftArrow} />
        </button>
    )
}