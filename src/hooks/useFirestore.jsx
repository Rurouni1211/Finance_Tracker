 import { useReducer, useEffect, useState } from "react";
 import { projectAuth, projectFirestore, timestamp } from "../firebase/config";
 import { collection, addDoc, deleteDoc, doc  } from "firebase/firestore"; 

let initialState = {
    document: null, 
    isPending: false, 
    error: null, 
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING': 
            return {  isPending: true, document: null, success: false, error: null}
        case 'ADDED_DOCUMENT': 
            return {isPending: false, document: action.payload, success: true, error: null} 
        case "DELETED_DOCUMENT":
            return { isPending: false, document: null, success: true, error: null };
        case 'ERROR': 
            return {isPending: false, document: null, success: false, error: action.payload}
        default: 
            return state
    }
}

 export const useFirestore = (collectionName) =>{
    const [response, dispatch] = useReducer(firestoreReducer, initialState) 
    const [isCancelled, setIsCancelled] = useState(false) 

    const ref = collection(projectFirestore, collectionName);

    const dispatchIfNotCancelled = (action) => {
        if(!isCancelled){
            dispatch(action)
        }
    }

    const addDocument = async (doc) => {
        dispatch({ type: 'IS_PENDING' })

        try {
            const createdAt = timestamp.fromDate(new Date())
            const addedDocument = await addDoc(ref, { ...doc, createdAt });
            dispatchIfNotCancelled({type: 'ADDED_DOCUMENT', payload: addedDocument})
        } catch (err) {
           dispatchIfNotCancelled({type: 'ERROR', payload: err.message})
            
        }
    }

    const deleteDocument = async (id) => {
        dispatch({type: 'IS_PENDING'})

        try {
            const docRef = doc(projectFirestore, collectionName, id);
            await deleteDoc(docRef)
            dispatchIfNotCancelled({ type: "DELETED_DOCUMENT" });
        } catch (err) {
            dispatchIfNotCancelled({ type: "ERROR", payload: 'could not delete' });
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return {addDocument, deleteDocument, response}
 }