import React from 'react';
import './App.css';
import HeroSection from './sections/HeroSection';
// import PhoneModel from './sections/PhoneModel';
import Quote from './sections/Quote';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      {/* <PhoneModel /> */}
      <HeroSection />
    </>
  );
}

export default App;
