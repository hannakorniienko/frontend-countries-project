import React from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { remove } from '../redux/reducers/favCountries'
import '../styles/favCountry.css'

const FavCountries = () => {
    const {favCountriesList} = useAppSelector((state) => state.favCountries)
    const dispatch = useAppDispatch()
    return (
        <div id='fav-country'>
            <div>{favCountriesList.map(item => (
            <ul key={item.name.common}>
                <li><img style={{ width: 20 }} src={item.flags.png} alt="flag" />
                    <Link to= {`/bof-frontend-project-basic/${item.name.common}`}>
                        {item.name.common}
                    </Link>
                    <button id='delete-fav-btn' onClick={() => {dispatch(remove(item.name.common))}}>Delete</button>
                </li>
            </ul>))}
            </div>
        </div>)
}

export default FavCountries

