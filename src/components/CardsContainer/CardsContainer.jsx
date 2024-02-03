import React from 'react'
import "./CardsContainer.scss";
import Apartment from '../Apartment/Apartment.jsx';
import { useEffect, useState } from "react";


function CardsContainer() {

  const [apartments, setAppartments] = useState([]);

  useEffect(fetchApartments, []);

  function fetchApartments(){
    fetch("data.json")
    .then((response) => response.json())
        .then((response) => setAppartments(response))
        .catch(console.error)
  }


  return (
    <div className="all-cards_container">
    {apartments.map ((apartment) => (
       <Apartment title={apartment.title} imageUrl={apartment.cover} id={apartment.id}/>))}
    </div>
  )
}

export default CardsContainer