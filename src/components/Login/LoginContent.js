import React, { useRef, useContext } from 'react';
import './LoginContent.css';
import AuthContext from '../../store/auth-context';

const LoginContent = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const loginButtonHandler = async (event) => {
        event.preventDefault();

        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        try {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?keyAIzaSyBIK-IBlNP0POvmW1SYCGZLBPHPo1jiDRA', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Authentication failed!');
            }

            const data = await response.json();
            authCtx.login(data.idToken);
            console.log(data)
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={loginButtonHandler}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        ref={emailInputRef}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        ref={passwordInputRef}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginContent;
