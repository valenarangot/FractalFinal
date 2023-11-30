import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export function PrivateRoute({children}) {
    const {isLogged} = useAuth()
    
    return isLogged ? children : <Navigate to= '/admin/submit'/>

}