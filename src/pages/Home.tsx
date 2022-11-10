import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchCountries, search, sort } from '../redux/reducers/countries'
import Countries from '../components/Countries'
import FavCountries from './FavCountries'

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
        <input type="text" value={input} onChange={
          (e:any) =>{
            setInput(e.target.value)
            dispatch(search(input))
          }
        } />
        {loading ? <h1>Loading...</h1>:<Countries countries={renderedCountries}/>}
      </div>
    );
  }

export default Home