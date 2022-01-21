import { DATA, PAYMENTPAGE_LOADING } from "./actionTypes";
export const  dataAction=(data)=>({type:DATA,payload:data});

export const pp_Loading = () => ({
    type : PAYMENTPAGE_LOADING,
})
