import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Stack from '@mui/material/Stack';

import { sortbyName, sortbyPopulation } from '../redux/reducers/countries'
import { add, remove } from '../redux/reducers/favCountries'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { Country, Props } from '../types/countries'
import '../styles/countries.css'

const Countries = ({countries}: Props) => {
  const dispatch = useAppDispatch()
  const sortCountriesByName = () => dispatch(sortbyName())
  const sortCountriesByPopulation = () => dispatch(sortbyPopulation())
  const { favCountriesList } = useAppSelector((state) => state.favCountries);
  const favoriteAction = (item: Country) => {
    if (favCountriesList.includes(item)) {
      dispatch(remove(item.name.common));
    } else {
      dispatch(add(item));
    }
  };
  return (
    <Paper sx={{ width: 'length', overflow: 'hidden', margin:'5px' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell><button id='sort-btn' onClick={() => sortCountriesByName()}>Name</button></TableCell>
              <TableCell>Capital</TableCell>
              <TableCell><button id='sort-btn' onClick={() => sortCountriesByPopulation()}>Population</button></TableCell>
              <TableCell>Continent</TableCell>
              <TableCell>Currencies</TableCell>
              <TableCell>Languages</TableCell>
              <TableCell>Add to favorite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {countries.map(item => (
              <TableRow hover role="checkbox" tabIndex={-1} key={item.name.common}>
                  <TableCell><img style={{ width: 100, boxShadow:'0px 0px 6px 2px #dbdbdb'}} src={item.flags.png} alt="flag" /></TableCell>
                  <TableCell><Link to= {`/bof-frontend-project-basic/${item.name.common}`}>{item.name.common}</Link></TableCell>
                  <TableCell>{item.capital?.map(capital => (<p>{capital}</p>))}</TableCell>
                  <TableCell>{item.population}</TableCell>
                  <TableCell>{item.continents?.map(continents => (<p>{continents}</p>))}</TableCell>
                  <TableCell>{Object.values(item.currencies).map((item: any) => (<p key={item}>{item.name}</p>))}</TableCell>
                  <TableCell>{Object.values(item.languages).map((item: any) => (<p key={item}>{item}</p>))}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1} onClick={() => favoriteAction(item)}>
                      <IconButton aria-label="favorite">
                      {favCountriesList.includes(item) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                      </IconButton>
                    </Stack>
                  </TableCell>
              </TableRow>))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default Countries


