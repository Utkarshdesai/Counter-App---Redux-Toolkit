import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from '../redux/Slice/Counterslice'


export const Counter = () => {
    //this fuction used to acess the value of state
    const count = useSelector((state)=>state.counter.value)

    //it is used to listen to event add function to it 
    const dispatch = useDispatch ()
  return (
    <div className='wrapper'>

        <div className='heading'> Counter App </div>
        
        <div className='display'>
        <button className='plus' onClick={()=> dispatch(increment())}> add </button>

        <div className='counter'> {count}  </div>

        <button className='minus' onClick={()=>dispatch(decrement())}> minus </button>


        </div>

       
       
        <button className='reset' onClick={()=>dispatch(reset())}> Reset </button>

    </div>
  )
}
