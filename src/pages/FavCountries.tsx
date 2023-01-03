import IconButton from '@mui/material/IconButton'
import React from 'react'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { remove } from '../redux/reducers/favCountries'
import '../styles/favCountry.css'

const FavCountries = () => {
    const {favCountriesList} = useAppSelector((state) => state.favCountries)
    const dispatch = useAppDispatch()
    return (
        favCountriesList.length === 0 ? <h4 id='empt-fav-list'>The list is empty!</h4> :
        <Paper sx={{width: 'fit-content', overflow: 'hidden', margin: 'auto', marginTop: '5px' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{textAlign: 'center'}} colSpan={2}>Country</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {favCountriesList.map(item => (
                <TableRow hover role="checkbox" tabIndex={-1} key={item.name.common}>
                    <TableCell><img style={{ width:50, boxShadow:'0px 0px 3px 1px #dbdbdb'}} src={item.flags.png} alt="flag" /></TableCell>
                    <TableCell><Link to= {`/bof-frontend-project-basic/${item.name.common}`}>{item.name.common}</Link></TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1} onClick={() => {dispatch(remove(item.name.common))}}>
                        <IconButton aria-label="favorite">
                        <DeleteOutlineIcon />
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

export default FavCountries

