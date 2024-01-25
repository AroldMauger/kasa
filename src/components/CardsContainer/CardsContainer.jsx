import React from 'react'
import "./CardsContainer.scss";
import Apartment from '../Apartment/Apartment.jsx';

function CardsContainer() {
  return (
    <div className="all-cards_container">
        <Apartment/>
        <Apartment/>
        <Apartment/>
        <Apartment/>

    </div>
  )
}

export default CardsContainer