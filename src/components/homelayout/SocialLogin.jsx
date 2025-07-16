import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";



const SocialLogin = () => {

  const GoogleProvider = new GoogleAuthProvider()
  const GitProvider = new GithubAuthProvider()
    const auth = getAuth(app);


  const handleGoogleLogIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then(res => {
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
  }

  const handleGitLogIn = () => {
    signInWithPopup(auth, GitProvider)
      .then(res => {
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
  }


  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button onClick={handleGoogleLogIn} className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24} /> Login with Google
        </button>
        <button onClick={handleGitLogIn} className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
