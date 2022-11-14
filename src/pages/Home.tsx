import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchCountries, search } from '../redux/reducers/countries'
import Countries from '../components/Countries'
import Box from '@mui/material/Box';
import '../styles/home.css';

const Home = () => {
    const dispatch = useAppDispatch()
    const {loading, countries, filtered} = useAppSelector((state) => state.countries)
    const [input, setInput ]= useState("")
    useEffect(() => {
      dispatch(fetchCountries())
    }, [dispatch])
    let renderedCountries = filtered.length > 0 ? filtered : countries
    return (
        <div>
          <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
            noValidate
            autoComplete="off">
              <TextField 
              id="outlined-basic" 
              label="Search" 
              variant="outlined" 
              sx={{color: "secondary"}}
              value={input}
              onChange={
                (e:any) =>{
                  setInput(e.target.value)
                  dispatch(search(input))
                }}
              />
        </Box>
          {loading ? <h1>Loading...</h1>:<Countries countries={renderedCountries}/>}
        </div>
    );
  }

export default Home