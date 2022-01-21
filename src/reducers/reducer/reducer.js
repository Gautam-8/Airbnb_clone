import { DATA, PAYMENTPAGE_LOADING } from "./actionTypes";
let init={data:[] , p_Loading:true};
export const reducer=(state=init,{type,payload})=>{
    switch(type){
        case DATA:
            return {...state,data:payload}
           

            case PAYMENTPAGE_LOADING :
                return{
                    ...state,
                    p_Loading : false
                }

                default :
                return state;
    }
} 
