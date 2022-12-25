import React from 'react';
import './App.css';
import BatterySection from './sections/BatterySection';
import DesignSection from './sections/DesignSection';
import DisplaySection from './sections/DisplaySection';
import HeroSection from './sections/HeroSection';
import ProcessorSection from './sections/ProcessorSection';
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
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
    </>
  );
}

export default App;
