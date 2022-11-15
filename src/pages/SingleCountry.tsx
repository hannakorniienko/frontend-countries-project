import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

import { fetchCountry } from '../redux/reducers/countries'
import '../styles/singleCountry.css'

const SingleCountry = () => {
    const {name} = useParams()
    const {country} = useAppSelector((state) => state.countries)
    const dispatch = useAppDispatch()
    useEffect(() => {
      if(name){
        dispatch(fetchCountry(name))
      }
    },[dispatch, name])
  
    if (country.length === 0){
      return <h3>
        Loading...
      </h3>
    }

  return (
    <div>
        <ul>
            <li><img style={{ width: 100 }} src={country[0].flags.png} alt="flag" /></li>
            <li>Country:</li>
            <ul>
              <li>{country[0].name.common}</li>
            </ul>
            <li>Capital:</li>
            <ul>{country[0].capital?.map(capital => (
              <li>{capital}</li>))}
            </ul>
            <li>Continent:</li>
            <ul>{country[0].continents?.map(continents => (
              <li>{continents}</li>))}
            </ul>
            <li>Population:</li>
            <ul>
              <li>{country[0].population}</li>
            </ul>
            <li>Area:</li>
            <ul>
              <li>{country[0].area} km<sup>2</sup></li>
            </ul>
            <li>Language:</li>
            <ul>
            {Object.values(country[0].languages).map((item: any) => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
            <li>Currency:</li>
            <ul>
            {Object.values(country[0].currencies).map((item: any) => (
                  <li key={item}>{item.name}</li>
                ))}
            </ul>
            
        </ul>
    </div>
  )
}

export default SingleCountry