import { useEffect, useState } from "react"
import { collection, onSnapshot } from "firebase/firestore";
import { projectFirestore } from "../firebase/config"

export const useCollection = (collectionName) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Collection reference
        const ref = collection(projectFirestore, collectionName);
    
        const unsubscribe = onSnapshot(
          ref,
          (snapshot) => {
            const results = [];
            snapshot.docs.forEach((doc) => {
              results.push({ ...doc.data(), id: doc.id });
            });
            setDocuments(results); // Set documents with the retrieved data
            setError(null);
          },
          (err) => {
            console.log(err.message);
            setError("Could not fetch the data");
            setDocuments(null)
          }
        );
    
        // Cleanup function on unmount
        return () => unsubscribe();
      }, [collectionName]);

    return {documents, error}
}