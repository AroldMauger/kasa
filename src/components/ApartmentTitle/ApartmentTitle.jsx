import React from 'react'
import "./ApartmentTitle.scss";

function ApartmentTitle(props) {
  return (
    <h1 className="apartment_page_title">{props.title}</h1>

  )
}

export default ApartmentTitle