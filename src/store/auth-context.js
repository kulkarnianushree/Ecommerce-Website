import { createContext, useState } from "react";

const AuthContext = createContext({
    token: '',
    login: (token) => {}
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token'); // Changed 'Token' to 'token'
    const [token, setToken] = useState(initialToken);

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token); // Changed 'Token' to 'token'
    };

    const contextValue = {
        token: token,
        login: loginHandler
    };

    return (
        <AuthContext.Provider value={contextValue}> {/* Changed AuthContextProvider to AuthContext.Provider */}
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
