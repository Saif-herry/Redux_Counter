import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { add_number, division_number, multiply_number, substract_number } from "../Redux/action";

const Counter = ()=>{
  const {count} = useSelector((state)=>state)
  const dispatch = useDispatch();

  const increament = () =>{
    dispatch(add_number(1))
  }

  const decreament = () => {
    dispatch(substract_number(1))
  }

  const multiply = () => {
    dispatch(multiply_number(2))
  }

  const division = () => {
    dispatch(division_number(2))
  }

    return(
        <>
        <div>
            <h1>Count is:{count}</h1>
            <div>
            <button onClick={increament}>Add</button>
            <button onClick={decreament}>Substract</button>
            <button onClick={multiply}>Multiply</button>
            <button onClick={division}>Division</button>
            </div>
        </div>
        </>
    )
}

export default Counter