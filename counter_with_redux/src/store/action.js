import { INCREAMENT,DECREAMENT } from "./actionTypes";


export const increamentCounter = () =>( {
    type: INCREAMENT,
});

export const decreamentCounter = () =>({
    type: DECREAMENT,
});

