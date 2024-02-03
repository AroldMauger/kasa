import React from 'react'
import "./ApartmentLocation.scss";

function ApartmentLocation(props) {
  return (
    <h2 className="apartment_page_location">{props.location}</h2>
  )
}

export default ApartmentLocation