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
            <button onClick={()=>dispatch(increamentCounter())}>+</button>
           
            <button onClick={()=>dispatch(decreamentCounter())}>-</button>
        </div>
    )
}

export default Counter;