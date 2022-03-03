
import { loadData } from "../../components/localStorage";
import { DATA, LOGIN, LOGOUT, ORDER, PAYMENTPAGE_LOADING, PAYMENT_ERROR, PAYMENT_REQ, PAYMENT_SUCCESS } from "./actionTypes";

let token = loadData('token');

let init={data:[] , p_Loading:true , payReq:false , paySuccess:false , payError:false , order : true, loginAuth : token? true : false};
export const reducer=(state=init,{type,payload})=>{
    switch(type){
        case DATA:
            return {...state,data:payload}
           

            case PAYMENTPAGE_LOADING :
                return{
                    ...state,
                    p_Loading : false
                }

                case PAYMENT_REQ : 
                return{
                    ...state,
                    payReq : true,
                }
                case PAYMENT_SUCCESS :
                    return{
                        ...state,
                        payReq : false,
                        payError : false,
                        paySuccess : true
                    }
                    case PAYMENT_ERROR : 
                    return{
                        ...state,
                        payReq : false,
                        payError : true,
                    }
                    case ORDER : 
                    return{
                        ...state,
                          order:false
                    }

                    case LOGOUT : 
                    return{
                        ...state,
                        loginAuth : false
                    }

                    case LOGIN : 
                    return{
                        ...state,
                        loginAuth : true
                    }

                default :
                return state;
    }
} 
