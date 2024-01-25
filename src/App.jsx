import React from 'react';
import "./app.scss";
import Banner from './components/Banner/Banner.jsx';
import CardsContainer from './components/CardsContainer/CardsContainer.jsx';
import Header from './layout/Header/Header.jsx';
import Footer from './layout/Footer/Footer.jsx';

function App() {
  return (
    <div>
      <main>
        <Header />
        <Banner/>
        <CardsContainer/>
      </main>
      <Footer/>
    </div>
  )
}

export default App