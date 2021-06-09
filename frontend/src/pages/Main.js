import React from 'react';
import '../App.css'
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

function Main() {
  return (
    <><Navbar/>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Main;