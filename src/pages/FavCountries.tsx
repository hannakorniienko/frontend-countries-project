import React from 'react'
import { useAppSelector } from '../redux/hooks'

const FavCountries = () => {
    const {countries} = useAppSelector((state) => state.favCountries)
    return (
        <div>{countries.map(item => (
            <ul key={item.name.common}>
                <li>{item.name.common}</li>
            </ul>
        ))}
        </div>)
    
}

export default FavCountries

