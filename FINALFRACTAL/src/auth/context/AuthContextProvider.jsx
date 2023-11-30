import { AuthContext } from "./AuthContext";
import React, { useState } from "react";

export function AuthContextProvider({ children }){

    const [isLogged, setIsLogged] = useState(false)

    const [email, setEmail] = useState("");
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
