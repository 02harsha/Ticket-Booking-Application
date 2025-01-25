import {configureStore} from '@reduxjs/toolkit'
import userReducer from './isUserSlice'
import theatresReducer from './theaterSlice'
import userChoiceReducer from './userSelection'
import { enableMapSet } from "immer"
enableMapSet()
export const store = configureStore({
    reducer:{
        currentUser:userReducer,
        theatres:theatresReducer,
        userChoice:userChoiceReducer
    }
})


