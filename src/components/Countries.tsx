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
import { Box, TableFooter, TablePagination, TableSortLabel, useTheme } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - countries.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <Paper sx={{ width: 'length', overflow: 'hidden', margin:'5px' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell>
                <TableSortLabel onClick={() => {dispatch(sortCountriesByName());}}>Name</TableSortLabel>
              </TableCell>
              <TableCell>Capital</TableCell>
              <TableCell>
                <TableSortLabel onClick={() => {dispatch(sortCountriesByPopulation());}}>Population</TableSortLabel>
                </TableCell>
              <TableCell>Continent</TableCell>
              <TableCell>Currencies</TableCell>
              <TableCell>Languages</TableCell>
              <TableCell>Add to favorite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? countries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : countries
            ).map(item => (
              <TableRow hover role="checkbox" tabIndex={-1} key={item.name.common}>
                  <TableCell component="th" scope="row"><Link to= {`/bof-frontend-project-basic/${item.name.common}`}><img style={{ width: 100, boxShadow:'0px 0px 6px 2px #dbdbdb'}} src={item.flags.png} alt="flag" /></Link></TableCell>
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
              {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={countries.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default Countries


