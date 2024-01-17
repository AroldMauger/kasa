import React from 'react'
import "../sass/cards-container.scss";
import Apartment from './Apartment.jsx';

function CardsContainer() {
  return (
    <div className="all-cards_container">
        <Apartment/>
        <Apartment/>

    </div>
  )
}

export default CardsContainer