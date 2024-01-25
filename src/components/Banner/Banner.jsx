import React from 'react'
import "./banner.scss";

function Banner() {
  return (
    <div className="banner">
        <img className="banner_image" src="picture-main.png" alt="banner du site Kasa montrant un paysage de falaises"/>
        <h2 className="banner_text">Chez vous, partout et ailleurs</h2>
    </div>
  )
}

export default Banner