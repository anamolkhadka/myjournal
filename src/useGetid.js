import {app} from './firebase';
import { getAuth,onAuthStateChanged }from 'firebase/auth'
import {useState } from 'react';


const useGetid = () => {

    const auth = getAuth();
    const[userid,setUserid] = useState(null);

    //////I need to pass the userid to the firebase component and create a new collection for the user id.
    ///Checking user status and collecting user id.

    onAuthStateChanged(auth,(user) => {
        if(user)
        {
            ///console.log(user.uid);
            setUserid(user.uid)

            
        }
        else
        {
            setUserid(null);
        }

    })
    
    return {userid};

}
 
export default useGetid;