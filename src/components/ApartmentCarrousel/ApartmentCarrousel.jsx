import React from 'react'
import "./ApartmentCarrousel.scss";

function ApartmentCarrousel() {
  return (
    <div className="carrousel_apartments">
    <div className="carrousel_image_container">
        <img src="picture-about.png" alt="carrousel avec photos des appartements Kasa"     />
    <span className="slide_counter">1/4</span> 
    </div>
    
    <div className="button_previous">
      <i className="fas fa-chevron-left"></i>
    </div>
    <div className="button_next" >
      <i className="fas fa-chevron-right"></i>
    </div>

  </div>    )
}

export default ApartmentCarrousel