import { DATA, LOGIN, LOGOUT, ORDER, PAYMENTPAGE_LOADING, PAYMENT_ERROR, PAYMENT_REQ, PAYMENT_SUCCESS } from "./actionTypes";
export const  dataAction=(data)=>({type:DATA,payload:data});

export const pp_Loading = () => ({
    type : PAYMENTPAGE_LOADING,
})

export const payment_Req = () => ({
    type:PAYMENT_REQ,
})

export const payment_Success = () => ({
    type:PAYMENT_SUCCESS,
})

export const payment_Error = () => ({
    type:PAYMENT_ERROR,
})

export const order_Success = () => ({
    type:ORDER,
})

export const logOut = () => ({
    type:LOGOUT,
})
export const logIn = () => ({
    type:LOGIN,
})