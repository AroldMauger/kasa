import React from 'react'
import "./ApartmentPage.scss";
import Collapse from '../../components/Collapse/Collapse.jsx';
import ApartmentTitle from '../../components/ApartmentTitle/apartmentTitle.jsx';
import ApartmentLocation from '../../components/ApartmentLocation/ApartmentLocation.jsx';
import ApartmentTags from '../../components/ApartmentTags/ApartmentTags.jsx';
import ApartmentOwner from '../../components/ApartmentOwner/ApartmentOwner.jsx';
import ApartmentRating from '../../components/ApartmentRating/ApartmentRating.jsx';
import ApartmentCarrousel from '../../components/ApartmentCarrousel/ApartmentCarrousel.jsx';
import NotFound404Content from '../../components/NotFound404Content/NotFound404Content.jsx';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";


function ApartmentPage() {
    {/* On met dans la variable "location" le hook useLocation de React pour récupérer des informations sur l'URL (pathname et state) */}
    const location = useLocation();

    {/* On définit par défaut la variable selectedApartment sur null avec useState(null),
    C'est la fonction setSelectedApartment définie plus bas qui mettra à jour cette variable */}
    const [selectedApartment, setSelectedApartment] = useState(null);

    {/* Dans le useEffect on laisse le deuxième argument vide, car il n'y a pas de dépendances. 
    On veut que la fonction fetchApartmentData soit exécutée une seule fois au chargement de la page */}
    useEffect(() => {
        if (location.state) {
            fetchApartmentData();
        }
    }, [location.state]);

    {/* Dans fetch on va chercher avec .find l'appartment dont l'id passé dans le location.state correspond à l'id dans le fichier json */}
    function fetchApartmentData () {
      fetch ("kasa/data.json")
      .then ((response) => response.json())
      .then((apartments) => {
          const apartment = apartments.find((apartment) => apartment.id === location.state.apartmentId);
          setSelectedApartment(apartment); {/* setSelectedApartment mettra à jour le useState avec la variable selectedApartment définis plus haut */}
      })
      .catch(console.error)
  }
  {/*Puisque selectedApartment est définie sur null par défaut et que le fetch met un peu de temps à récupérer les données, 
    il faut gérer le cas d'affichage initial de selectedApartment */}
    if (location.state == null) return <NotFound404Content/>;
    if (selectedApartment == null) return <div>Loading...</div>;

    console.log(location)
  return (
    <div className="apartment_page">
        <ApartmentCarrousel pictures={selectedApartment.pictures}/>
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
        <Collapse title="Description" content={selectedApartment.description}/>

        {/* Ici on récupère dans "equipement chacun des élements du tableau [equipments] pour les afficher via des balises <li> */}
        <Collapse title="Équipements" content={selectedApartment.equipments.map((equipement, index) => 
                (<li key={index}> {equipement} </li>))}/>
        </div>
        
    </div>
    )
}

export default ApartmentPage