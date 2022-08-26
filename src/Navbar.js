import './css/navbar.css';
import { Link,useHistory } from "react-router-dom";
import {app} from './firebase';
import { getAuth,signOut } from 'firebase/auth';

const Navbar = () => {

    ///initi services
    const history= useHistory();
    const auth = getAuth(app);
    const user_logout = (e) => {

        e.preventDefault()
        signOut(auth)
        .then(() => {
            console.log('the user signed out')
            history.push('/myjournal');
        })
        .catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <nav className="navbar justify-content-center">
            <h1>My Journal</h1>
            <div className="book-icon" >
                <i className="bi bi-journal"></i>
            </div>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/create">New Blog</Link>
                {/* <a href='#' onClick={user_logout}>Logout</a> */}
                <button onClick={user_logout}>Logout</button>
           </div>
        </nav>
    );
}

export default Navbar;
