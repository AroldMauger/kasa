import React from 'react'
import "./Collapse.scss";
import { useState } from 'react';

function Collapse(props) {
  {/* On définit que par défaut le texte est caché*/}
  const [isContentVisible, setIsContentVisible] = useState(false) 

  {/* On définit que par défaut le chevron est fermé*/}
  const [isChevronClosed, setIsImageOpened] = useState(true);

  {/* La fonction qui se déclenche au clic affiche le texte et ouvre le chevron*/}
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
    setIsImageOpened(!isChevronClosed);
  }

  return (
    <div className="apartment_description">
        <p className="collapse_header">
            <span>{props.title}</span>
            <img className="drop" src={isChevronClosed ? "drop_closed.png" : "drop_opened.png"} onClick={showContent} alt="bouton en forme de chevron"/>
        </p>
        {isContentVisible && <p className="collapse_content">{props.content}</p>}
    </div>  
  )
}

export default Collapse