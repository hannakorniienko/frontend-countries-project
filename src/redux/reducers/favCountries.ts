import { createSlice } from "@reduxjs/toolkit";
import { Country } from "../../types/countries";

const initialState: Country[] = []

const favCountriesSlice = createSlice({
    name: "favCountriesReducer",
    initialState,
    reducers: {
        addToFav: () => {

        },
        removeFromFav: () => {

        }
    }
})