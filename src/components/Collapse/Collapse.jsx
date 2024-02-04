import React from 'react'
import "./Collapse.scss";

function Collapse(props) {
  return (
    <div className="apartment_description">
        <p className="collapse_header">
            <span>{props.title}</span>
            <img className="drop" src="drop_closed.png"/>
        </p>
        <p className="collapse_content">{props.content}</p>
    </div>  
  )
}

export default Collapse