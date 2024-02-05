import React from 'react'
import "./ApartmentOwner.scss";

function ApartmentOwner(props) {
    {/*Ici on divise la valeur de host.name dans le fichier json en deux parties avec .split. 
    On utilise le destructuring en définissant directement les 2 variables firstName et lastName */}
    
    const flat = props.flat
    const name = flat.host.name;
    const [firstName, lastName] = name.split(" ")

  return (
        <div className="owner_details">
            <h3>
                <span>{firstName}</span>
                <span>{lastName}</span>
            </h3>
            <div className="photo_owner">
                <img src={flat.host.picture} alt="propriétaire de l'appartement" />
            </div>
        </div>    )
}

export default ApartmentOwner