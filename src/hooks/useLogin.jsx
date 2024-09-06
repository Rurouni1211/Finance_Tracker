import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { projectAuth } from "../firebase/config";
import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const {dispatch } = useAuthContext(); 

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)

        try {
            const res = await signInWithEmailAndPassword(projectAuth, email, password)
            dispatch({type:'LOGIN', payload: res.user})

            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
           
        } catch (err) {
            if(!isCancelled){
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
          
        }
    }

    useEffect(()=> {
        setIsCancelled(false); 
        return () => setIsCancelled(true)
    }, [])
    return{login, error, isPending}
}