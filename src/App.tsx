import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path=":id" element={<SingleCountry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
