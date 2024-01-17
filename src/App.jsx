import React from 'react';
import "./sass/App.scss";
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';

function App() {
  return (
    <div>
      <Header />
      <Banner/>
    </div>
  )
}

export default App