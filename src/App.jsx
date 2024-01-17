import React from 'react';
import "./sass/app.scss";
import Header from './layout/Header.jsx';
import Banner from './components/Banner.jsx';
import CardsContainer from './components/CardsContainer.jsx';

function App() {
  return (
    <div>
      <Header />
      <Banner/>
      <CardsContainer/>
    </div>
  )
}

export default App