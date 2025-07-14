import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayouts = () => {
    return (
        <div className="min-h-screen w-11/12 mx-auto my-10">
            
            <header >
                
                <Navbar></Navbar>
            </header>
            
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayouts;