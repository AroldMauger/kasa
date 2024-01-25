import React from 'react'
import "./ApartmentPage.scss";
import Collapse from '../../components/Collapse/Collapse.jsx';
import ApartmentTitle from '../../components/ApartmentTitle/apartmentTitle.jsx';
import ApartmentLocation from '../../components/ApartmentLocation/ApartmentLocation.jsx';
import ApartmentTags from '../../components/ApartmentTags/ApartmentTags.jsx';



function ApartmentPage() {
  return (
    <div className="apartment_page">

        <div className="apartment_header">
            <div className="apartment_banner_left">
            <ApartmentTitle/>
            <ApartmentLocation/>
            <ApartmentTags/>
            </div>
            <div className="apartment_owner">
            
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