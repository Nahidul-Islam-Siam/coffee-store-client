import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContex = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)


    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
        user,
        createUser,
        loading
    }
    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;