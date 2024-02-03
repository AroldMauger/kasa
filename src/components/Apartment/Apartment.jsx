import React from 'react'
import "./Apartment.scss";
import { Outlet, Link } from "react-router-dom";



function Apartment(props) {
  return (
    <Link to="/apartments">
      <div className='card'>
            <img className="cover-in-cards" src={props.imageUrl} alt="" />
            <p className="title">{props.title}</p>
      </div>
    </Link>
   
  )
}

export default Apartment