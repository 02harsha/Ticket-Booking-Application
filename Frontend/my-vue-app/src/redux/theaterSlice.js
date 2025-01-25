import {createSlice} from '@reduxjs/toolkit'

const initialState={
    theatres:{}
}

const theatreSlice=createSlice({
    name:'theatres',
    initialState,
    reducers:{
        getTheatres:(state,{payload})=>{
            state.theatres=payload
        }
    }
})

export const {getTheatres} = theatreSlice.actions 

export default theatreSlice.reducer