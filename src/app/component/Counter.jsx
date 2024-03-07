import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,Addmultiplier,Removemultiplier } from '../../Redux/slice/counterSlice'


function Counter() {
    const count = useSelector((state)=>state.counterStore.count)
    const [multiplier,setMultiplier] = useState(10)
    const dispatch = useDispatch();
  return (
    <div className='mt-2 pt-2 pl-2 text-center' style={{borderTop:"1px solid #999"}}>
        <div className='text-white pb-2 h4'>Counter: {count}</div>
        <div className='row'>
            <div className='p-4 col-12 col-md-6'>
                <div className='border p-4'>
                    <button className='btn btn-primary' onClick={()=>dispatch(increment())}>Add</button>&nbsp;
                    <button className='btn btn-danger'onClick={()=>dispatch(decrement())}>Remove</button>
                </div>
                <div className='p-4 col-12 col-md-6'>
                <div className='border p-4'>
                    <h4 className='text-success pb-2'>Multiplier Counter</h4>
                    <div className='row'>
                        <div className='col-4 p-1'>
                            <input type='text' placeholder='Multiplier....' value={multiplier} className='form-control' onChange={(e) => setMultiplier(e.target.value)}/>
                        </div>
                        <div className='col-4 p-1'>
                        <button className='btn btn-primary form-control' onClick={()=>dispatch(Addmultiplier(multiplier))}>Add</button>
                        </div>
                        <div className='col-4 p-1 '>
                        <button className='btn btn-danger form-control'onClick={()=>dispatch(Removemultiplier(multiplier))}>Remove</button>
                        </div>
                    </div>
                    

                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Counter
