import { INCREAMENT,DECREAMENT } from "./actionTypes";


export const increamentCounter = (payload) =>( {
    type: INCREAMENT,
    payload,
});

export const decreamentCounter = (payload) =>({
    type: DECREAMENT,
    payload,
});

