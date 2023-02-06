import { DECREAMENT, DIVISION, INCREAMENT, MULTIPLY } from "./actionTypes"

const initialState = {
    count:0
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
      
        default:{
            return state;
        }
    }

}