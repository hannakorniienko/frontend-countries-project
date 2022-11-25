import React from 'react'
import { useAppSelector } from '../redux/hooks'

import '../styles/favCountry.css'

const FavCountries = () => {
    const {favCountriesList} = useAppSelector((state) => state.favCountries)
    return (
        <div id='fav-country'>{favCountriesList.map(item => (
            <ul key={item.name.common}>
                <li><img style={{ width: 20 }} src={item.flags.png} alt="flag" /> {item.name.common}</li>
            </ul>
        ))}
        </div>)
    
}

export default FavCountries

