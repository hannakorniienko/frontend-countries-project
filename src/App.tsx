import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchCountries, sortByName } from './redux/reducers/countries';
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';

const App = () => {
  const countries = useAppSelector(state => state.countriesReducer)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCountries())
  }, [])
  return (
    <div className='App'>
      <Routes>
        <BrowserRouter>
          <Route path='/' element={<Home />}/>
          <Route path=':name' element={<SingleCountry />} />
        </BrowserRouter>
      </Routes>
    </div>
  );
}

export default App;
