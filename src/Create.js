import './css/create.css';
import {db} from "./firebase";
import useGetid from "./useGetid";
import { collection,addDoc,serverTimestamp } from "firebase/firestore";
import { useHistory } from "react-router-dom";

const Create = () => {

    /// adding documents
    const history= useHistory();
    // collection ref
    const {userid} = useGetid();
    const colRef = collection(db,`blogs-${userid}`);  

    const handleSubmit =(e) => {
        const addBookForm = document.querySelector('.add')   ///Storing add form to const using the querySelector.
        e.preventDefault();
        addDoc(colRef,{                                  ///addDoc function will take the ref of the document collection and add the given object to it.
            title: addBookForm.title.value,              ///Taking the value of the user input in the title name and authot name of the add form.
            body: addBookForm.body.value,
            author: addBookForm.author.value,
            createdAt: serverTimestamp()
        })
        .then(() => {
            addBookForm.reset()                         ///Reseting the form after the user submits it.
            history.push('/home');                          ///Routing to the home page after the user submits the form.
        })
    }
    
    return (  
        <div className="create">
            <div className="container-xl">
                <h2>Add a new Blog!</h2>
                <form className="add" onSubmit={handleSubmit}>
                    <label type="title">Title:</label>
                    <input type="text" name="title" required/>
                    <label>Blog body:</label>
                    <textarea type="text" name="body" required/>
                    <label type="author">Author:</label>
                    <input type="text" name="author" required/>
                    {<button>Add Blog</button>}
                </form>
            </div>           
    </div>
    );
}
 
export default Create;