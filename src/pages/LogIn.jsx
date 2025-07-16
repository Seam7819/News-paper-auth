import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const LogIn = () => {

    const {logInUser,setUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogIn = e =>{
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email');
        const password = form.get('password');
        console.log({password,email});
        logInUser(email,password)
        .then(res=>{
            const user = res.user;
            console.log(user);
            setUser(user)
            navigate(location?.state ? location.state : '/' )
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className="w-full  flex justify-center items-center p-10">
            <div className="card bg-base-100   max-w-sm shrink-0 shadow-2xl">
                
                <form onSubmit={handleLogIn} className="card-body">
                    <h1 className="text-center text-2xl font-semibold">Please LogIn</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral w-full">Login</button>
                    </div>
                    <p className="text-center">Don't have any account?<span className="text-red-500 font-semibold"><Link to='/auth/register'>Register</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default LogIn;