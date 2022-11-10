import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../../types/countries";

export type CountriesState = {
    countries: Country[]
    filtered: Country[]
    loading: boolean
    error: boolean
    country: Country[]
}

const initialState: CountriesState = {
    countries: [],
    filtered: [],
    loading: false,
    error: false,
    country: []
}


const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers:{
        sort: (state, action: PayloadAction<string>) => {
            state.countries = state.countries.sort((a, b) => (a>b) ? 1 : -1)
        },
        search: (state, action: PayloadAction<string>) =>{
            state.filtered = []
            let input = action.payload
            if (!input){
                state.filtered = []
            }else{
                state.filtered = state.countries.filter((item) => 
                item.name.common.toLowerCase().includes(input.toLowerCase())
            )
            }
        },
    },
    extraReducers: (build) => {
        build.addCase(fetchCountries.fulfilled, (state, action) => {
            state.countries = action.payload
            state.error = false
            state.loading = false
        })
        build.addCase(fetchCountries.rejected, (state, action) => {
            state.error = true
            state.countries = []
        })
        build.addCase(fetchCountries.pending, (state, action) => {
            state.loading = true
        })
        build.addCase(fetchCountry.fulfilled, (state, action) => {
            state.country = action.payload
            state.error = false
            state.loading = false
        })
        build.addCase(fetchCountry.rejected, (state, action) => {
            state.error = true
            state.country = []
        })
        build.addCase(fetchCountry.pending, (state, action) => {
            state.loading = true
        })
    }
})

export const fetchCountries = createAsyncThunk(
    "countries/fetchCountries",
    async () => {
        const response = await fetch(`https://restcountries.com/v3.1/all?fields=name,capital,currencies,languages,flags,continents,population`)
        const data: Country [] = await response.json()
        return data
    }
)

export const fetchCountry = createAsyncThunk(
    "countries/fetchCountry",
    async (name: string) => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        const data: Country [] = await response.json()
        return data
    }
)


// export default countriesSlice.reducer
export const countriesReducer = countriesSlice.reducer
export const {sort, search} = countriesSlice.actions