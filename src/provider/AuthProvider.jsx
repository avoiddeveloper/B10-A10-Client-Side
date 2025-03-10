import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUSer = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        logOut, loginUSer
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, [auth]);

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;