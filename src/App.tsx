import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/App.css';
import NavBar from './components/NavBar';
import FavCountries from './pages/FavCountries';
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/bof-frontend-project-basic" element={<Home />}/>
      <Route path="/bof-frontend-project-basic/:name" element={<SingleCountry />} />
      <Route path="/bof-frontend-project-basic/fav" element={<FavCountries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
