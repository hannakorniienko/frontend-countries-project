import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchCountries, sortByName } from '../redux/reducers/countries'

import Countries from '../components/Countries'

const Home = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(fetchCountries())
    }, [])
    return (
      <div>
        <Countries />
      </div>
    );
  }

export default Home