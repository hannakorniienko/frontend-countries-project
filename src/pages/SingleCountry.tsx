import Paper from '@mui/material/Paper/Paper'
import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import TableCell from '@mui/material/TableCell/TableCell'
import TableContainer from '@mui/material/TableContainer/TableContainer'
import TableHead from '@mui/material/TableHead/TableHead'
import TableRow from '@mui/material/TableRow/TableRow'
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
    <div id='single-country'>
      <Paper sx={{width: 'fit-content', overflow: 'hidden', margin: 'auto', marginTop: '5px' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{textAlign: 'center', fontWeight: 'bold'}} colSpan={2}>
                  <img style={{ width: 100, boxShadow:'0px 0px 6px 2px #dbdbdb'}} src={country[0].flags.png} alt="flag" /><br />
                  {country[0].name.common}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>Capital:</TableCell>
                    <TableCell>{country[0].capital?.map(capital => (<div>{capital}</div>))}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>Continent:</TableCell>
                    <TableCell>{country[0].continents?.map(continents => (<div>{continents}</div>))}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>Population:</TableCell>
                    <TableCell>{country[0].population}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>Area:</TableCell>
                    <TableCell>{country[0].area} km<sup>2</sup></TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>Language:</TableCell>
                    <TableCell>{Object.values(country[0].languages).map((item: any) => (
                      <div key={item}>{item}</div>))}
                    </TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>Currency:</TableCell>
                    <TableCell>{Object.values(country[0].currencies).map((item: any) => (
                      <div key={item}>{item.name}</div>))}
                    </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper> 
    </div>
  )
}

export default SingleCountry