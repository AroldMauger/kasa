import React from 'react'
import "./Collapse.scss";

function Collapse() {
  return (
    <div className="apartment_description">
        <p className="collapse_header">
            <span>Description</span>
            <img className="drop" src="drop_closed.png"/>
        </p>
        <p className="collapse_content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ipsa repudiandae expedita delectus quis odio pariatur esse laborum. Doloribus deleniti dolorum ratione tempora accusantium magni ipsam distinctio quo laborum totam nisi veritatis ducimus nemo vel assumenda, minima temporibus laudantium culpa necessitatibus quam molestias, natus odio repellat? Harum in odio dolores!</p>
    </div>  
  )
}

export default Collapse