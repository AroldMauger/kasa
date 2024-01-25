import React from 'react';
import "./HomePage.scss";
import Banner from '../../components/Banner/Banner.jsx';
import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx';
import Header from '../../layout/Header/Header.jsx';
import Footer from '../../layout/Footer/Footer.jsx';

function HomePage() {
  return (
    <div>
        <Banner/>
        <CardsContainer/>
    </div>
  )
}

export default HomePage