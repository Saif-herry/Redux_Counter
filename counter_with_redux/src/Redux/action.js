import {DECREAMENT, DIVISION, INCREAMENT, MULTIPLY} from "./actionTypes"

export const add_number = (data) =>(dispatch)=>{

dispatch({type:INCREAMENT , payload : data})
}

export const substract_number = (data) =>(dispatch)=>{
    dispatch({type:DECREAMENT, payload:data})
}

export const multiply_number = (data) => (dispatch)=>{
   dispatch({type:MULTIPLY, payload:data})
}

export const division_number = (data) => (dispatch) =>{
   dispatch({type:DIVISION,payload:data})
}