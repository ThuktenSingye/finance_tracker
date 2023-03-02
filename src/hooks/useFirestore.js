// can be used to add or remove document in the collection
import { useReducer, useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

const firestoreReducer = (state,action) =>{
    switch(action.type){
        default:
            return state
    }
}
let initialState= {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const useFirestore = (collection) =>{
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    const ref = projectFirestore.collection(collection)

    //to  add document
    const addDocument = (doc) =>{

    }
    // delete an document
    const deleteDocument = (id) =>{

    }
    // cleanup function
    useEffect(()=>{
        return () => setIsCancelled(true)
    }, [])
    return {addDocument, deleteDocument, response}
}
export default useFirestore