import React from 'react'

import { Country } from '../types/countries'

const fetchCountries = () => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,languages,flags,region").then(
        data => data.json() 
    ).then(
        (data: Country[]) => createTable(data)
    ).catch((e) => {
        console.log(e)
    })
}

const createTable = (usersArray: Country[]) => {

}


const CountriesList = () => {
  return (
    <div>Countries</div>
  )
}

export default CountriesList