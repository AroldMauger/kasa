import React from 'react'
import "./ApartmentTags.scss";

function ApartmentTags(props) {

  {/*La méthode .map permet d'itérer sur chaque tag et de créer une balise <span> pour chacun d'entre eux */}
  return (
      <div className="apartment_tags">
        {props.flat.tags.map((tag) => (
          <span key={tag} className="apartment_tag">{tag}</span>
        ))}
      </div>    
    )
}

export default ApartmentTags