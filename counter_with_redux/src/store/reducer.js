import { DECREAMENT, INCREAMENT } from "./actionTypes";


export const reducer = (state,action)=>{
    switch(action.type){
        case INCREAMENT:{
            return {
                ...state,
                count:state.count+1,
            }
        }
        case DECREAMENT:{
            return{
                ...state,
                count:state.count-1,
            }
        }
        default:
            return state;
    }

}