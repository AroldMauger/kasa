import React from 'react';
import "./HomePage.scss";
import Banner from '../../components/Banner/Banner.jsx';
import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx';


function HomePage() {
  return (
    <div>
        <Banner imageUrl={"picture-main.png"} title={"Chez vous, partout et ailleurs"}/>
        <CardsContainer/>
    </div>
  )
}

export default HomePage