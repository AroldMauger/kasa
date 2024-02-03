import React from 'react'
import "./ApartmentPage.scss";
import Collapse from '../../components/Collapse/Collapse.jsx';
import ApartmentTitle from '../../components/ApartmentTitle/apartmentTitle.jsx';
import ApartmentLocation from '../../components/ApartmentLocation/ApartmentLocation.jsx';
import ApartmentTags from '../../components/ApartmentTags/ApartmentTags.jsx';
import ApartmentOwner from '../../components/ApartmentOwner/ApartmentOwner.jsx';
import ApartmentRating from '../../components/ApartmentRating/ApartmentRating.jsx';
import ApartmentCarrousel from '../../components/ApartmentCarrousel/ApartmentCarrousel.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";


function ApartmentPage() {

    const location = useLocation();
    const [selectedApartment, setSelectedApartment] = useState(null);
    useEffect(fetchApartmentData, []);

    function fetchApartmentData () {
      fetch ("data.json")
      .then ((response) => response.json())
      .then((apartments) => {
          const apartment = apartments.find((apartment) => apartment.id === location.state.apartmentId);
          setSelectedApartment(apartment);
      })
      .catch(console.error)
  }
  if (selectedApartment == null) return <div>Loading...</div>;


  return (
    <div className="apartment_page">
        <ApartmentCarrousel imageUrl={selectedApartment.cover}/>
        <div className="apartment_header">
            <div className="apartment_banner_left">
            <ApartmentTitle title={selectedApartment.title}/>
            <ApartmentLocation location={selectedApartment.location}/>
            <ApartmentTags flat={selectedApartment}/>
            </div>
            <div className="apartment_owner">
            <ApartmentOwner flat={selectedApartment}/>
            <ApartmentRating flat={selectedApartment}/>
            </div>
        </div>
        <div className="apartment_description_area">
        <Collapse/>
        <Collapse/>
        </div>
        
    </div>
    )
}

export default ApartmentPage