import React from 'react'
import "./ApartmentCarrousel.scss";
import { useState, useEffect } from "react";

function ApartmentCarrousel(props) {

  const pictures = props.pictures;

  {/*Ici on définit la variable currentPicture sur 0 avec useState(0) 
  La fonction setCurrentPicture mettra à jour la variable currentPicture*/}
  const [currentPicture, setCurrentPicture] = useState(0);

  useEffect(() => {
    displaySlideCounter();
  }, [pictures]);

  {/*Si l'index de l'image correspond à la valeur dans le useState (par défaut 0), alors on l'affiche en ajoutant une class show */}
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  const displaySlideCounter = () => {
    const slideCounter = document.querySelector(".slide_counter");
    const buttonPrevious = document.querySelector(".button_previous");
    const buttonNext = document.querySelector(".button_next");

    if (slideCounter) {
      if (pictures.length === 1) {
        slideCounter.style.display = "none";
        buttonPrevious.style.display = "none";
        buttonNext.style.display = "none";
      } else {
        slideCounter.style.display = "block";
        buttonPrevious.style.display = "flex";
        buttonNext.style.display = "flex";
      }
    }
  }

  {/*POUR AFFICHER L'IMAGE PRÉCÉDENTE :
  - on définit une variable newCurrentPicture qui correspond à currentPicture -1 (donc par défaut 0 car plus haut on définit useState(0)) 
  - si la valeur de newCurrentPicture est négative, alors on prend la valeur de la longueur de l'array [pictures] -1, 
  c'est-à-dire le dernier élément du tableau [pictures]
  cela permet de ne pas sortir de la longueur du tableau [pictures] et d'afficher toujours l'image précédente */}
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  }
  {/*POUR AFFICHER L'IMAGE SUIVANTE : 
- On ajoute +1 à la valeur de currentPicture, puis on veut le modulo de la division de currentPicture/ longueur du tableau [pictures]
- imaginons que [pictures] ait une longueur de 5, alors quand currentPicture arrivera à 5, 5%5 = 0, ce qui nous renvoie au début du tableau
  cela permet de ne pas sortir de la longueur du tableau [pictures] et d'afficher toujours l'image suivante*/}

    const moveToNext = () => {
      setCurrentPicture((currentPicture + 1) % pictures.length);
    }

  {/*La méthode .map permet d'itérer sur chaque image du tableau [pictures] du json. 
  En CSS on a fait en sorte de superposer les images avec "position:relative/absolute" et de leur mettre par défaut une opacity:0; */}

  return (
    <div className="carrousel_apartments">
    <div className="carrousel_image_container">

      {/*Ici non seulement on itère sur le tableau [pictures] mais on fait correspondre un index "i" à chaque élément du tableau [pictures]*/}
      {pictures.map((picture, i) => (<img
                key={picture}
                src={picture}
                alt="carrousel avec photos des appartements Kasa"     
                className={getClassName(i)}></img>))} 
      <span className="slide_counter">{currentPicture + 1} / {pictures.length}</span> 
    </div>
    
    <div className="button_previous" onClick={moveToPrevious}>  {/*Au click on appelle la fonction moveToPrevious */}
      <i className="fas fa-chevron-left"></i>
    </div>
    <div className="button_next" onClick={moveToNext} > {/*Au click on appelle la fonction moveToNext */}
      <i className="fas fa-chevron-right"></i>
    </div>

  </div>    )
}

export default ApartmentCarrousel