import React from 'react';
import './App.css';
import Quote from './sections/Quote';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
    </>
  );
}

export default App;
