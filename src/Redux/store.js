import { configureStore } from "@reduxjs/toolkit";
import {counterReducer} from "./slice/counterSlice"
import { destinationReducer } from "./slice/destinationSlice";

export const store = configureStore({
    reducer:{
        //counterStore can be any unique name fgiven by user
        counterStore:counterReducer,
        destinationStore:destinationReducer
    }
})

// console.log(store.getState());
// store.dispatch({
//     type: "counter/increment"
// });
// console.log(store.getState());