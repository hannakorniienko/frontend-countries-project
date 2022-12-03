import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchCountries, search } from '../redux/reducers/countries'
import Countries from '../components/Countries'


const Home = () => {
    const dispatch = useAppDispatch()
    const {loading, countries, filtered} = useAppSelector((state) => state.countries)
    const [input, setInput ]= useState("")
    useEffect(() => {
      if(!countries.length){
        dispatch(fetchCountries())
      }
    }, [countries.length, dispatch])
    let renderedCountries = filtered.length > 0 ? filtered : countries
    return (
        <div>
          <Stack direction="column" alignItems="center"
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
            noValidate
            autoComplete="off">
              <TextField 
              id="outlined-basic" 
              label="Search" 
              variant="outlined" 
              sx={{"& .MuiFormLabel-root": {
                    color: 'success.main'
                },"& .MuiFormLabel-root.Mui-focused": {
                    color: 'success.main'
                }, "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#2e8b57"
                  }
                }}}
              value={input}
              onChange={
                (e:any) =>{
                  setInput(e.target.value)
                  dispatch(search(input))
                }}
              />
        </Stack>
          {loading ? <h2>Loading...</h2>:<Countries countries={renderedCountries}/>}
        </div>
    );
  }

export default Home