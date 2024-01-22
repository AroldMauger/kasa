import React from 'react';
import "./sass/app.scss";
import Header from './layout/Header.jsx';
import Banner from './components/Banner.jsx';
import CardsContainer from './components/CardsContainer.jsx';
import Footer from './layout/Footer.jsx';

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