import { Link, NavLink } from "react-router";
import  userImg from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {

  const {logOut} = useContext(AuthContext)
  const handleLogOut = ()=>{
    logOut()
    .then(res =>{
      const user = res.user;
      console.log(user);
    })
  }

  const {user} = useContext(AuthContext)
  console.log(user);
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        {
          user ?  <img src={user.photoURL} alt="" />:<img src={userImg} alt="" />
          
        }
        {
          user ? <button onClick={handleLogOut} className="btn btn-primary px-10">SignOut</button> :
          <Link to='/auth/login' className="btn btn-primary px-10 ">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
