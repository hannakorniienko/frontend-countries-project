import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../../types/countries";

export type FavCountriesState = {
    countries: Country[]
}

const initialState: FavCountriesState = {
    countries: []
}


const favcountriesSlice = createSlice({
    name: "favSlice",
    initialState,
    reducers:{
        add: (state, action: PayloadAction<Country>) => {
            state.countries.push(action.payload)
        },
        remove: (state, action: PayloadAction<string>) => {
            state.countries = state.countries.filter(
            (item) => item.name.common !== action.payload
            )
        }
    }
})


export const favcountriesReducer = favcountriesSlice.reducer
export const {add, remove} = favcountriesSlice.actions