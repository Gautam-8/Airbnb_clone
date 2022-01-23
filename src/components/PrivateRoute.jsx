import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {

    let token = localStorage.getItem('token')
        token = JSON.parse(token);
    

    if(!token){
        return  <Navigate to={'/login'} />
    }

    return children;
    
}