import React from 'react'
import { useDispatch } from 'react-redux'
//import { resetCounter } from '../../Redux/slice/counterSlice'
import { resetDestination } from '../../Redux/slice/destinationSlice'
import { resetAction } from '../../Redux/action/actions'



function ResetApp() {
  const dispatch = useDispatch()

  const resetAll = () => {
    dispatch(resetAction());
    //dispatch(resetCounter());
  }
  return (
    <div className='text-center'>
        <button className='btn btn-warning' onClick={() => resetAll()}>Reset App</button>
      
    </div>
  )
}

export default ResetApp
