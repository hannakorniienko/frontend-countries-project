import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchCountries, sortByName } from '../redux/reducers/countries'
import SingleCountry from './SingleCountry'

const Home = () => {
    const countries = useAppSelector(state => state.countriesReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(fetchCountries())
    }, [])
    return (
      <div>
        <button onClick={() => dispatch(sortByName())}>Sort countries</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Capital</th>
              <th>Flag</th>
              <th>Currencies</th>
              <th>Languages</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            {countries.map(item => (
              <tr>
                <td key={item.name.official}>{item.name.official}</td>
                <td key={item.capital}>{item.capital}</td>
                <td key={item.flags}><img style={{ width: 100 }} src={item.flags.png} alt="flag" /></td>
                <td>{item.currencies}</td>
                <td>{item.languages}</td>
                <td>{item.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default Home