import './css/blogdetails.css';
import {db} from "./firebase";
import useGetid from "./useGetid";
import { useParams } from "react-router-dom";
import {
    doc, onSnapshot,collection,
    deleteDoc     
} from 'firebase/firestore'
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {

    const history= useHistory();
    const{id}=useParams();
    const[blog,setBlog] = useState(null);
    // collection ref
    const {userid} = useGetid();
    const colRef = collection(db,`blogs-${userid}`);  
    
    ///Getting single document.
    useEffect(() => {

        const docref= doc(colRef,id);
        onSnapshot(docref,(doc) => {

            setBlog({...doc.data(),id:doc.id})
            ///console.log(doc.data(),doc.id)
        })

    },[id,blog]);  

    /// deleting documents
    const handleClick = (e) => {

        e.preventDefault();
        const docref= doc(colRef,id);
        deleteDoc(docref)

        .then(() => {
            history.push('/');             ///Routing to the home page.
        })
    }
    
    
    return (
        <div className="blog-details">
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
           )}

        </div>   
    );
}
 
export default BlogDetails;