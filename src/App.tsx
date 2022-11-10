import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import FavCountries from './pages/FavCountries';
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path=":name" element={<SingleCountry />} />
      <Route path="/fav" element={<FavCountries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
