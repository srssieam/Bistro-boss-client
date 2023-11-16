import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const GoogleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const googleLogin = ()=>{
        return signInWithPopup(auth, GoogleProvider)
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            const userInfo = { email: currentUser?.email };
            if(currentUser){
                // send email and get token then store token in localStorage
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if(res.data.token){
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            }
            else{
                // remove token from localStorage (if there is no current user)
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    })

    const authInfo = { user, loading, createUser, login, logOut, googleLogin, updateUserProfile }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;