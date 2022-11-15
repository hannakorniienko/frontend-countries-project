import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { countriesReducer } from "./reducers/countries";
import { favcountriesReducer } from "./reducers/favCountries";



export const store = configureStore({
    reducer:{
        countries: countriesReducer,
        favCountries: favcountriesReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;