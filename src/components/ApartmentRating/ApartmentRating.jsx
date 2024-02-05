import React from 'react'
import "./ApartmentRating.scss";

function ApartmentRating(props) {
  {/*On définit un tableau de 5 éléments qui correspondent aux étoiles et à leur place d'affichage sur le site.
    On compare chacune des valeurs (étoiles) du tableau avec la valeur rating du fichier json.
  Si la valeur du json est supérieur ou égale aux valeurs du tableau, alors chacune des valeurs (étoiles) prend un class "on"
  la méthode .map itère sur chaque élément du tableau et permet de créer une balise <span> pour chacun des éléments (étoiles)*/}
  
  return (
      <div className="apartment_rating">
         {[1, 2, 3, 4, 5].map((num) =>(
                <span key={num} className={props.flat.rating >= num ? "on" : ""}><i className="fa-solid fa-star"></i></span>                
                ))}              
      </div>    
    )
}

export default ApartmentRating