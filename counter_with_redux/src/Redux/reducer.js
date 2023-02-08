import { ADD_TODO, DECREAMENT, DELETE_TODO, DIVISION, INCREAMENT, MULTIPLY, TOGGLE_TODO } from "./actionTypes"

const initialState = {
    count:0,
    todo:[],
}

export const reducer = (state=initialState,action) =>{

    switch(action.type){
      case INCREAMENT:
        return{
            ...state,
            count:state.count + action.payload
        }
      case DECREAMENT:
        return{
            ...state,
            count:state.count - action.payload
        }
    case MULTIPLY:
        return{
            ...state,
            count:state.count*action.payload
        }
    case DIVISION:
        return{
            ...state,
            count:state.count/action.payload
        }
    case ADD_TODO:
        return{
           ...state,
           todo:[...state.todo,action.payload]
        }
    case DELETE_TODO:
        return{
           ...state,
           todo:state.todo.filter((item)=>item.id !==Number(action.payload))
        }

    case TOGGLE_TODO:
        const findTodo = state.todo.find((item)=>item.id===action.payload)
        const x = findTodo.status = true
        return{
             ...state,
             todo : state.todo, x
        }
      
    default:{
            return state;
        }
    }

}