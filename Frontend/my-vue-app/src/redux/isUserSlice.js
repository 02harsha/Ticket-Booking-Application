import { createSlice } from "@reduxjs/toolkit"





const loggedUser={
    isUserLogged:false,
    isPaymentInitiated:false
}

const isUserSlice=createSlice({
    name:'currentUser',
    initialState:loggedUser,
    reducers:{
        activePaymentModal:(state)=>{
            state.isPaymentInitiated=true
        },
        inactivePaymentModal:(state)=>{
            state.isPaymentInitiated=false
        },
        
    }
})


export const {activePaymentModal,inactivePaymentModal}=isUserSlice.actions
export default isUserSlice.reducer