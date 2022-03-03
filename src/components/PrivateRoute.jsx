import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {

    let token = useSelector((state) => state.loginAuth)
      

    if(token === false){
        return  <Navigate to={'/login'} />
    }

    return children;
    
}