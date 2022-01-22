
import { DATA, PAYMENTPAGE_LOADING, PAYMENT_ERROR, PAYMENT_REQ, PAYMENT_SUCCESS } from "./actionTypes";
let init={data:[] , p_Loading:true , payReq:false , paySuccess:false , payError:false };
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

                default :
                return state;
    }
} 
