import React from 'react'
import "./ApartmentCarrousel.scss";
import { useState } from "react";

function ApartmentCarrousel(props) {

  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };
  
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  }

    const moveToNext = () => {
      setCurrentPicture((currentPicture + 1) % pictures.length);
    }


  return (
    <div className="carrousel_apartments">
    <div className="carrousel_image_container">
      {pictures.map((picture, i) => (<img
                key={picture}
                src={picture}
                alt="carrousel avec photos des appartements Kasa"     
                className={getClassName(i)}></img>))} 
      <span className="slide_counter">{currentPicture + 1} / {pictures.length}</span> 
    </div>
    
    <div className="button_previous" onClick={moveToPrevious}>
      <i className="fas fa-chevron-left"></i>
    </div>
    <div className="button_next" onClick={moveToNext} >
      <i className="fas fa-chevron-right"></i>
    </div>

  </div>    )
}

export default ApartmentCarrousel