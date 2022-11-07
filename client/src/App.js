import React from "react";

import Header from './components/Header/header'
import Hero from './components/Hero/hero'
import Footer from './components/Footer/footer'
import Details from './components/Details/details'

import "./App.css";

function App() {
  return (
    <div className="main-container">

      <Header/>

      <Hero/>

      <Details/>

      <Footer/>

    </div>
  );
}

export default App;
