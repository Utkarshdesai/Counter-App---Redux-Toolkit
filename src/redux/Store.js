import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './Slice/Counterslice'


//create global store 
export const store = configureStore({
  reducer: {
    //import counter reducer 
    counter: counterReducer
  },
})