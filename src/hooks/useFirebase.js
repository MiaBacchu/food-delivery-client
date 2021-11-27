import { useEffect, useState } from 'react';
import { GoogleAuthProvider ,getAuth ,signInWithPopup, onAuthStateChanged,signOut} from "firebase/auth";
import initializeAuthentication from '../firebaseConfig/initialize';

initializeAuthentication()

const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user,setUser]=useState([])
    const [error,setError]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const googleSignIn=()=>{
        setIsLoading(true)
        signInWithPopup(auth, provider)
        .then(result=>{
            setUser(result.user)
        })
        .catch((error) => {
            setError(error.message)})
            .finally(()=>{setIsLoading(false)})
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)  
            } 
            else {
                setUser({})
            }
            setIsLoading(false)
          });
    },[auth])
    const logOut=()=>{
        signOut(auth)
        .then(() => {
           setUser({}) 
          }).catch((error) => {
            setError(error)
          })
          .finally(()=>{setIsLoading(false)})
    }
    return (
        {
            googleSignIn,
            user,
            error,
            logOut,
            isLoading
        }
    );
};

export default useFirebase;