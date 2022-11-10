import React from 'react'
import { sortByName } from '../redux/reducers/countries'

import { useAppSelector } from '../redux/hooks'
import { Link } from 'react-router-dom'

const Countries = () => {
  const countries = useAppSelector(state => state.countriesReducer)
  return (
    <div>
        <table>
          <thead>
            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Capital</th>
              <th>Population</th>
              <th>Region</th>
              <th>Currencies</th>
              <th>Languages</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {countries.map(item => (
              <tr key={item.name.official}>
                <td><img style={{ width: 100 }} src={item.flags.png} alt="flag" /></td>
                <td >
                    <Link to= {`/${item.name.official}`}>{item.name.official}</Link>
                </td>
                <td>{item.capital?.map(capital => (
                  <p>{capital}</p>
                ))}</td>
                <td >{item.population}</td>
                <td>{item.region}</td>
                <td>{Object.values(item.currencies).map((item: any) => (
                  <p key={item}>{item.name}</p>
                ))}</td>
                <td>{Object.values(item.languages).map((item: any) => (
                  <p key={item}>{item}</p>
                ))}</td>
                <td><button>&hearts;</button></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Countries

function dispatch(arg0: { payload: undefined; type: "countriesSlice/sortByName" }): void {
    throw new Error('Function not implemented.')
}
