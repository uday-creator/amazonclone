import React from 'react';
import { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {

    const history = useHistory();

    //inital state of the email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signin = e => {
        //to prevent the refreshing of page.
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/")
            })
            .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();

        //do some firebase register shittt.
        //creating user and password
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it successfully created a new user with email and password

                console.log(auth);
                if (auth) {
                    history.push("/");
                }

            })
            .catch(error => alert(error.message));


    }

    return (
        <div className='login'>
            <Link to="/">
                <img
                    className='login_logo'
                    src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png">
                </img>
            </Link>

            <div className='login_container'>
                <h1>Sign in</h1>

                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange=
                        {e => setEmail(e.target.value)}></input>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={
                        e => setPassword(e.target.value)
                    }></input>

                    <button type='submit' onClick={signin} className='login_signin'>Sign in</button>
                </form>

                <p>
                    By continuing, you agree
                    to Amazon's Conditions of
                    Use and Privacy Notice.
                </p>

                <button onClick={register}
                    className='login_register'>Create your Amazon Account</button>

            </div>



        </div>
    )
}

export default Login