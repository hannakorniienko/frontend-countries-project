import React from 'react'
import { Link } from 'react-router-dom'

import { sort } from '../redux/reducers/countries'
import { add } from '../redux/reducers/favCountries'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { Props } from '../types/countries'

const Countries = ({countries}: Props) => {
  const dispatch = useAppDispatch()
  return (
    <div>
        <table>
          <thead>
            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Capital</th>
              <th>Population</th>
              <th>Continent</th>
              <th>Currencies</th>
              <th>Languages</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {countries.map(item => (
              <tr key={item.name.common}>
                <td><img style={{ width: 100 }} src={item.flags.png} alt="flag" /></td>
                <td >
                    <Link to= {`/${item.name.common}`}>{item.name.common}</Link>
                </td>
                <td>{item.capital?.map(capital => (
                  <p>{capital}</p>
                ))}</td>
                <td>{item.population}</td>
                <td>{item.continents?.map(continents => (
                  <p>{continents}</p>
                ))}</td>
                <td>{Object.values(item.currencies).map((item: any) => (
                  <p key={item}>{item.name}</p>
                ))}</td>
                <td>{Object.values(item.languages).map((item: any) => (
                  <p key={item}>{item}</p>
                ))}</td>
                <td>
                  <button onClick={() => {
                    dispatch(add(item))
                  }
                  }>
                  &hearts;</button></td>
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
