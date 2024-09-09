import { useEffect, useState, useRef } from "react";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore"; // Correct query function
import { projectFirestore } from "../firebase/config";

export const useCollection = (collectionName, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // Use a ref to avoid re-creating the query object on every render
  const queryRef = useRef(_query).current;
  const orderByRef = useRef(_orderBy).current; 
  useEffect(() => {
    // Collection reference
    let ref = collection(projectFirestore, collectionName);

    // If there's a query, apply it
    if (queryRef) {
      ref = query(ref, where(...queryRef)); // Use query to build Firestore query with where clause
    }
    if(orderBy){
        ref = query(ref, orderBy(...orderByRef));
    }
    // if (queryRef && orderByRef) {
    //     ref = query(ref, where(...queryRef), orderBy(...orderByRef)); // Apply both
    //   }
    // Listen to the snapshot
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
        setDocuments(null);
      }
    );

    // Cleanup function on unmount
    return () => unsubscribe();
  }, [collectionName, queryRef]);

  return { documents, error };
};
