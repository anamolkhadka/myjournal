import { Link,useHistory} from 'react-router-dom';
import {app} from './firebase';
import { getAuth, createUserWithEmailAndPassword }from 'firebase/auth'
import {useState } from 'react';

const Signup = () => {

    ///initi services
    const history= useHistory();
    const auth = getAuth(app);
    const[error,setError] = useState(null);
    ///const[userid,setUserid] = useState(null);

    const signup_user = (e) => {

        const signupForm = document.querySelector('.signup')  //Collecting signup form.
        e.preventDefault()

        const email= signupForm.email.value
        const password= signupForm.password.value

        createUserWithEmailAndPassword(auth,email,password)
            .then((cred) => {
                console.log('user created:',cred.user)
                signupForm.reset()
                setError(null)
                history.push('/')
            })
            .catch((err)=>{
                ///console.log(err.code)
                switch (err.code){
                    case "auth/invalid-email":
                        setError("Please enter valid email address.")
                        break;
                    case "auth/email-already-in-use":
                        setError("The email is already registered with us.")
                        break;
                    case "auth/weak-password":
                        setError("Please choose strong password.")
                        break;
                }
                if(error){
                    console.log(error);
                }
            })
    }
    return (  
        <form className="signup">
            <div>
                <h1>My Journal</h1>
            </div>
            <div>
                <label htmlFor="email">email:</label>
                <input type="email" name="email" placeholder='email' required/>
                <label htmlFor="password">password:</label>
                <input type="password" name="password" placeholder='password' required/>
                {error && <h5>{error}</h5>}
                <button onClick={signup_user}>Sign up</button>
            </div>
            <div>
                <p>Already have an account ?</p>
                <Link to={`/login`}>Login</Link>
            </div>
        </form>
    );
}

export default Signup;

