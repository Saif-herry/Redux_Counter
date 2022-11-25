import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { decreamentCounter, increamentCounter } from "../store/action";

const Counter = ()=>{
    const count = useSelector((state)=>state.count);
    const dispatch = useDispatch()
    return (
        <div>
            <div>
            Counter: {count}
            </div>
            <button onClick={()=>dispatch(increamentCounter(1))}>Increment by 1</button>
           
            <button onClick={()=>dispatch(decreamentCounter(1))}>Decrement by 1</button>
            <div>
        <button onClick={()=>dispatch(increamentCounter(5))}>Increment by 5</button>
       
        <button onClick={()=>dispatch(decreamentCounter(10))}>Decrement by 10</button>
    </div>
        </div>
        
    )
}

export default Counter;