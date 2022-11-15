import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Stack from '@mui/material/Stack';

import { sortbyName, sortbyPopulation } from '../redux/reducers/countries'
import { add } from '../redux/reducers/favCountries'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { Props } from '../types/countries'
import '../styles/countries.css'

const Countries = ({countries}: Props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const dispatch = useAppDispatch()
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell><button id='sort-btn' onClick={() => dispatch(sortbyName())}>Name</button></TableCell>
              <TableCell>Capital</TableCell>
              <TableCell><button id='sort-btn' onClick={() => dispatch(sortbyPopulation())}>Population</button></TableCell>
              <TableCell>Continent</TableCell>
              <TableCell>Currencies</TableCell>
              <TableCell>Languages</TableCell>
              <TableCell>Add to favorite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {countries.map(item => (
              <TableRow hover role="checkbox" tabIndex={-1} key={item.name.common}>
                  <TableCell><img style={{ width: 100 }} src={item.flags.png} alt="flag" /></TableCell>
                  <TableCell><Link to= {`/bof-frontend-project-basic/${item.name.common}`}>{item.name.common}</Link></TableCell>
                  <TableCell>{item.capital?.map(capital => (<p>{capital}</p>))}</TableCell>
                  <TableCell>{item.population}</TableCell>
                  <TableCell>{item.continents?.map(continents => (<p>{continents}</p>))}</TableCell>
                  <TableCell>{Object.values(item.currencies).map((item: any) => (<p key={item}>{item.name}</p>))}</TableCell>
                  <TableCell>{Object.values(item.languages).map((item: any) => (<p key={item}>{item}</p>))}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1} onClick={() => {dispatch(add(item))}}>
                      <IconButton aria-label="favorite">
                        <FavoriteIcon />
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

function dispatch(arg0: { payload: undefined; type: "countriesSlice/sortByName" }): void {
    throw new Error('Function not implemented.')
}
