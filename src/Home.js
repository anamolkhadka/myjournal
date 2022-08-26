import {db} from "./firebase";
import useGetid from "./useGetid";
import './css/home.css';
import BlogList from './BlogList';
import useFetch from "./useFetch";
import {collection,query,orderBy} from 'firebase/firestore';

const Home = () => {

    // collection ref
    const {userid} = useGetid();
    ///console.log(typeof(userid));
    const colRef = collection(db,`blogs-${userid}`);    ///Creating a unique collection for each user. 
    const q=query(colRef,orderBy('createdAt','desc'));  ///query to order by the time stamp.By default orderBy is ascending.
    const{blogs,isPending} = useFetch(q);
    
    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}
 
export default Home;

