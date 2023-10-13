import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0 ,
}

//create counterslice whcih accepts name , intial-value ,function which use to set the state value
export const Counterslice = createSlice({
    name : "counter",
    initialState,
    reducers:{
        increment :(state) => {
            state.value = state.value + 1 ;
            console.log(state)
        },
        decrement : (state)=> {
          state.value = state.value -1 ;
        },
        reset : (state)=>{
            state.value = 0;
        }
    }
})

//export with action method
export const {increment ,decrement ,reset} = Counterslice.actions ;

//export reducer 
export default Counterslice.reducer ;