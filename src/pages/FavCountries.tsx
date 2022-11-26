import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'

import '../styles/favCountry.css'

const FavCountries = () => {
    const {favCountriesList} = useAppSelector((state) => state.favCountries)
    return (
        <div id='fav-country'>
            <div>{favCountriesList.map(item => (
            <ul key={item.name.common}>
                <li><img style={{ width: 20 }} src={item.flags.png} alt="flag" /><Link to= {`/bof-frontend-project-basic/${item.name.common}`}>{item.name.common}</Link></li>
            </ul>))}
            </div>
        </div>)
}

export default FavCountries

