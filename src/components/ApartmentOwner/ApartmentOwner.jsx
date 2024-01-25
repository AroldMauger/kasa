import React from 'react'
import "./ApartmentOwner.scss";

function ApartmentOwner() {
  return (
        <div className="owner_details">
            <h3>
                <span>Alexandre</span>
                <span>Dumas</span>
            </h3>
            <div className="photo_owner">
                <img src="picture-main.png" />
            </div>
        </div>    )
}

export default ApartmentOwner