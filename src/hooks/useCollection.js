// this hook is to fetch collection from the firebase and display on the UI

import { collection, onSnapshot} from "firebase/firestore"
import { useState, useEffect }from "react"
import { projectFirestore } from "../firebase/config"

const useCollection = (data) =>{
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    // whenever collection changes we want to render again and display 
    useEffect(()=>{
        let ref = collection(projectFirestore, data)

        const unsub = onSnapshot(ref, (snapshot)=>{
            let results = []
            snapshot.docs.forEach(doc =>{
                results.push({...doc.data(), id:doc.id})
            })
            setDocuments(results)
            setError(null)
        }, (error)=>{
            console.log(error)
            setError('could not fetch the data')
        })

        // unmount the listener // cleanup function
        return () => unsub()
    },[data])

    return {documents, error}

}
export default useCollection