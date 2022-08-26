import './css/login.css';
import {app} from './firebase';
import { Link,useHistory} from 'react-router-dom';
import {
    getAuth,signInWithEmailAndPassword,
    onAuthStateChanged,GoogleAuthProvider,
    signInWithPopup,
}from 'firebase/auth'
import {useState } from 'react';

const Login = () => {
    
    ///initi services
    const history= useHistory();
    const auth = getAuth(app);
    const[error,setError] = useState(null);

    //Login In
    const user_login = (e) => {
        const loginForm = document.querySelector('.login')
        e.preventDefault()

        const email= loginForm.email.value
        const password= loginForm.password.value

        signInWithEmailAndPassword(auth,email,password)
            .then((cred) => {
                console.log('user logged in:',cred.user)
                console.log(cred.user.email);
                setError(null)
                loginForm.reset()
                history.push('/home');
            })
            .catch((err)=>{
                ///console.log(err.code);
                switch (err.code){
                    case "auth/user-not-found":
                        setError("User with this email doesn't exist.")
                        break;
                    case "auth/wrong-password":
                        setError("Invalid password")
                        break;
                    case "auth/invalid-email":
                        setError("Please enter valid email address.")
                        break;
                }
                if(error){
                    console.log(error);
                }
            })      

    }
    return (
        <form className="login">
            <div>
                <h1>My Journal</h1>
            </div>
            <div>
                <label htmlFor="email">email:</label>
                <input type="email" name="email" placeholder="e.g. mario@example.com"required/>
                <label htmlFor="password">password:</label>
                <input type="password" name="password" placeholder='password' required/>
                {error && console.log(error)}
                {error && <h5>{error}</h5>}
                <button onClick={user_login}>Login</button>
            </div>
            <div>
                <p>Don't have an account ?</p>
                <Link to={`/signup`}>Sign up</Link>
            </div>
           
        </form>
    );
}
 
export default Login ;