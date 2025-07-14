import { Link } from "react-router";

const LogIn = () => {
    return (
        <div className="w-full  flex justify-center items-center p-10">
            <div className="card bg-base-100   max-w-sm shrink-0 shadow-2xl">
                
                <form className="card-body">
                    <h1 className="text-center text-2xl font-semibold">Please LogIn</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
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