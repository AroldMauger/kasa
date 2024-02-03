import React from 'react'
import "./Apartment.scss";
import { Link } from "react-router-dom";



function Apartment(props) {
  return (
    <Link 
      to="/apartments" 
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