import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Country } from "../../types/countries";

const initialState: Country[] = []

export const fetchCountries = createAsyncThunk(
    "fetchCountries",
    async () => {
        const jsonData = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,languages,flags,region")
        const countries = await jsonData.json()
        return countries
    }
)

const countriesSlice = createSlice({
    name: "countriesSlice",
    initialState,
    reducers:{
        sortByName: (state) =>{
            state.sort((a, b) => a.name.official > b.name.official ? 1 : -1)
        }
    },
    extraReducers: (build) => {
        build.
            addCase(fetchCountries.fulfilled, (state, action) => {
                state = action.payload
                return state.map(item =>{
                    return item
                })
        })
    }
})

export const countriesReducer = countriesSlice.reducer
export const {sortByName} = countriesSlice.actions