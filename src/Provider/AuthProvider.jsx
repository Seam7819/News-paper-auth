import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext(null);
import app from "../Firebase/firebase.config"



const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    // console.log(user);
    const auth = getAuth(app);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribed = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })
    return ()=>{
        unSubscribed();
    } 
    },[])

    const authInfo = {
        user,
         setUser, 
         createUser,
         logInUser,
         logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;