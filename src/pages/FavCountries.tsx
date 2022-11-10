import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import Countries from '../components/Countries'
import { remove } from '../redux/reducers/favCountries'


const FavCountries = () => {
    const dispatch = useAppDispatch()
    const {countries} = useAppSelector((state) => state.favCountries)
    return (
        <li></li>
    )
}

export default FavCountries