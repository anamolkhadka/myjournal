import { Link } from "react-router-dom";
import './css/notfound.css';

const NotFound = () => {

    return (
        <div className="not-found">
            <h2>404 PAGE NOT FOUND</h2>
            <p>That page cannot be found</p>
            <Link to='/myjournal'>Back to the Login...</Link>
        </div>
    );
   
}
export default NotFound;