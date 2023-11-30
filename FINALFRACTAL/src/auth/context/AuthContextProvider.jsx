import { AuthContext } from "./AuthContext";
import React, { useState } from "react";

export function AuthContextProvider({ children }){

    const initLoggedState = JSON.parse(window.localStorage.getItem('Logged')) ?? false
    const initEmail = JSON.parse(window.localStorage.getItem('Email')) ?? ''
    

    const [isLogged, setIsLogged] = useState(initLoggedState)

    const [email, setEmail] = useState(initEmail);
    const [password, setPassword] = useState("");

    return(
            <AuthContext.Provider value={
                {
                    isLogged,
                    setIsLogged,
                    email, 
                    setEmail,
                    password,
                    setPassword
                }
            }>
                { children }
            </AuthContext.Provider>
    )
}
