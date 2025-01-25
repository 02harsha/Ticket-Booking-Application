import {createSlice} from '@reduxjs/toolkit'

const initialState={
    movie:null,
    showTime:null,
    theatre:null,
    Seats:[],
    total:null
}

const userChoice=createSlice({
    name:'userChoice',
    initialState,
    reducers:{
        selectedSeats:(state,{payload})=>{
            state.Seats.push(payload)
            state.total=state.Seats.length*150
        },
        selectedMovie:(state,{payload})=>{
            state.movie=payload
        },
        selectedShowTime:(state,{payload})=>{
            state.showTime=payload
        },
        selectedTheatre:(state,{payload})=>{
            state.theatre=payload
        },
        removeSeat:(state,{payload})=>{
            const idx=state.Seats.indexOf(payload)
            if(idx>-1){
                state.Seats.splice(idx,1)
            }
            state.total=state.Seats.length*150
        },
        confirmBooking:(state)=>{
            return state
        }
    }
})

export const {selectedSeats,selectedMovie,selectedShowTime,totalAmount,selectedTheatre,removeSeat,confirmBooking}=userChoice.actions

export default userChoice.reducer
