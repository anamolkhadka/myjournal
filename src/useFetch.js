///Custom Hook
import {
    onSnapshot,query
}from 'firebase/firestore';
import { useState,useEffect } from "react";

const useFetch = (colRef) => {

    const[blogs,setBlogs] = useState(null);
    const[isPending,setIsPending] = useState(true);

    useEffect(()=> {            ///This method will fire on every render.
        setTimeout(() => {

            const q= query(colRef);
            let data = [];
    
            onSnapshot(q,(snapshot) => {           ///This method takes colref and a function as a parameter which fires eveytime there is any change in the collection ref.
                snapshot.docs.forEach((doc) => {
                    data.push({...doc.data(),id:doc.id}) ///For each of the document from the db we are passing the document's data and id as objects to the book array.
                })
                if(data)
                {
                    setBlogs(data);
                    setIsPending(false);
                } 
            })

        },);
    },[colRef]);

    return {blogs,isPending}

}
 
export default useFetch;