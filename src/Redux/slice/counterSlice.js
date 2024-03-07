import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationSlice";
import { resetAction } from "../action/actions";

const initialState = {count: 10};


export const counterSlice= createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        increment: (state) => {
            state.count+=1;
        },
        decrement: (state) => {
            state.count-=1;
        },
        Addmultiplier:(state,action) =>{
           state.count += Number(action.payload);
        },
        Removemultiplier:(state,action) =>{
            state.count -= Number(action.payload);
        },
        // resetCounter:(state) =>{
        //     state.count = 10;
        // }
    },
    extraReducers:(builder) => {
        builder.addCase(resetAction,(state) =>{
                state.count = 10;
             })
    }
})

export const {increment,decrement,Addmultiplier,Removemultiplier} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;