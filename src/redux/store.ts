import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { countriesReducer} from './reducers/countries'

export const store = configureStore({
    reducer:{
        countriesReducer
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