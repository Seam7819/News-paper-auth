import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {


    const { createUser,setUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name')
        const email = form.get('email')
        const PhotoUrl = form.get('PhotoUrl')
        const password = form.get('password')
        console.log({name,email,PhotoUrl,password});
        createUser(email,password)
        .then(res => {
            const user = res.user;
            console.log(user);
            setUser(user)
        })
    }

    return (
        <div className="w-full  flex justify-center items-center p-10">
            <div className="card bg-base-100   max-w-sm shrink-0 shadow-2xl">

                <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-center text-2xl font-semibold">Please Register</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input name="PhotoUrl" type="text" placeholder="PhotoUrl" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-neutral w-full">Register</button>
                    </div>
                    <p className="text-center">Already Have Account?<span className="text-red-500 font-semibold"><Link to='/auth/login'>LogIn</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default Register;