import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../../types/countries";

export type FavCountriesState = {
    favCountriesList: Country[]
}

const initialState: FavCountriesState = {
    favCountriesList: []
}


const favcountriesSlice = createSlice({
    name: "favSlice",
    initialState,
    reducers:{
        add: (state, action: PayloadAction<Country>) => {
            if(!state.favCountriesList.includes(action.payload)){
                state.favCountriesList.push(action.payload)
            }
        },
        remove: (state, action: PayloadAction<string>) => {
            state.favCountriesList = state.favCountriesList.filter(
            (item) => item.name.common !== action.payload
            )
        }
    }
})


export const favcountriesReducer = favcountriesSlice.reducer
export const {add, remove} = favcountriesSlice.actions