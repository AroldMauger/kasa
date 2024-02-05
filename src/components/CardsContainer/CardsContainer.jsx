import React from 'react'
import "./CardsContainer.scss";
import Apartment from '../Apartment/Apartment.jsx';
import { useEffect, useState } from "react";


function CardsContainer() {

  {/* On définit [apartments] comme un array vide avec useState([]) 
      setApartments est la fonction utilisée pour mettre à jour l'état de [apartments].
      useState est un array vide car on prévoit d'y mettre un array [apartments] dans l'état du composant. 
      setApartments récupère les données du fichier json et met à jour [apartments]*/}

  const [apartments, setAppartments] = useState([]);

  {/* Dans le useEffect on laisse le deuxième argument vide, car il n'y a pas de dépendances. 
  On veut que la fonction fetchApartments soit exécutée une seule fois au chargement de la page */}
  useEffect(fetchApartments, []); 

  function fetchApartments(){
    fetch("data.json")
    .then((response) => response.json())
        .then((response) => setAppartments(response))
        .catch(console.error)
  }

{/* Une fois l'array apartments récupéré avec fetch, on utilise .map pour générer un composant <Apartment> pour chaque élément de l'array.
  On passe les props title, imageUrl, id et key*/}

  return (
    <div className="all-cards_container">
    {apartments.map ((apartment) => (
       <Apartment title={apartment.title} imageUrl={apartment.cover} id={apartment.id} key={apartment.id}/>))}
    </div>
  )
}

export default CardsContainer