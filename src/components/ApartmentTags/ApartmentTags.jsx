import React from 'react'
import "./ApartmentTags.scss";

function ApartmentTags(props) {
  return (
      <div className="apartment_tags">
        {props.flat.tags.map((tag) => (
          <span key={tag} className="apartment_tag">{tag}</span>
        ))}
      </div>    
    )
}

export default ApartmentTags