import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import LoadingState from "../components/LoadingState";

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(loading){
       return <LoadingState></LoadingState>
    }

    if(user && user?.email){
        return children
    }else{
        return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    }
};

export default PrivateRoute;