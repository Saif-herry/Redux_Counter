import {ADD_TODO, DECREAMENT, DELETE_TODO, DIVISION, INCREAMENT, MULTIPLY, TOGGLE_TODO} from "./actionTypes"

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

export const addTodos = (data) => (dispatch) => {
   dispatch({type:ADD_TODO,payload:data})
}

export const deleteTodos = (data) => (dispatch) =>{
   dispatch({type:DELETE_TODO,payload:data})
}

export const toggleTodos = (data) => (dispatch) => {
   dispatch({type:TOGGLE_TODO,payload:data})
}