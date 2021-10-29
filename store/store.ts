import { configureStore } from '@reduxjs/toolkit'
import feedsReducer from "./feedsSlice";
import loginReducer from './loginSlice'

export const store =  configureStore({
    reducer:{
        feeds: feedsReducer,
        login: loginReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
