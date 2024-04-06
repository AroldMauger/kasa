import React from 'react'
import "./Apartment.scss";
import { Link } from "react-router-dom";


{/* On veut que apartmentId: props.id  soit accessible dans location.state de la nouvelle page. 
L'id nous sert à charger les données correspondantes à un appartement en particulier */}

function Apartment(props) {
  return (
    <Link 
      to="/kasa/apartments" 
      state={{
        apartmentId : props.id
      }}>      
      <div className='card'>
              <img className="cover-in-cards" src={props.imageUrl} alt="image d'un appartement de Kasa" />
              <p className="title">{props.title}</p>
      </div>
    </Link>
   
  )
}

export default Apartment