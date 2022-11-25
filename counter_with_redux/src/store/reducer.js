import { DECREAMENT, INCREAMENT } from "./actionTypes";


export const reducer = (state,action)=>{
    switch(action.type){
        case INCREAMENT:{
            return {
                ...state,
                count:state.count+action.payload,
            }
        }
        case DECREAMENT:{
            return{
                ...state,
                count:state.count-action.payload,
            }
        }
        default:
            return state;
    }

}

/*
switch(action.type){
    case INCREAMENT:{
        console.log("I'm here",state);
        state.count++;
        return state;
//here the value is not increamented because state is non-primitive datatype i.e
//object and object work with references not with actual value
//so if you update a value reference don't know the value
//is updated so we need to make a shellow copy and update the 
//value 
shellow copy-->{
    ...state,
    count:state.count+1
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

*/
