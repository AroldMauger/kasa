import React from 'react'
import "./Banner.scss";

function Banner(props) {
  return (
    <div className="banner">
        <img className="banner_image" src={props.imageUrl} alt="banner du site Kasa montrant un paysage montagneux"/>
        <h2 className="banner_text">{props.title}</h2>
    </div>
  )
}

export default Banner