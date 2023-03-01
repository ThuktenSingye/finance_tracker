
import { useState } from "react"
import { projectAuth} from "../firebase/config"
import {createUserWithEmailAndPassword} from 'firebase/auth'

const useSignup = ()=>{
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const signup = async (email, password, name)=>{
        setError(null) // reset error everytime we sign in
        setIsPending(true)
        await createUserWithEmailAndPassword(projectAuth, email, password)
        .then((userCredential) => {
            // Handle successful account creation
            const user = userCredential.user
            console.log(`User ${user.email} created successfully!`)
            console.log(user)
            setIsPending(false)
            setError(null)
        })
        .catch((error) => {
            // Handle errors
            console.error(error)
            setError(error)
            setIsPending(false)
        })
        // try{
        //     // signup user
            
        //     const res = await projectAuth.createUserWithEmailAndPassword(email, password) // create new user with given email and password 
        //     console.log(res.user)
        //     if (!res){
        //         throw new Error('could not complete signup')
        //     }
        //     await res.user.updateProfile({name}) // take user info and update profile with the given name
        //     setIsPending(false)
        //     setError(null)
        // }catch(err){
        //     console.log(err.message)
        //     setError(err.message)
        //     setIsPending(false)
        // }

    }
    return {error, isPending, signup}
}
export default useSignup