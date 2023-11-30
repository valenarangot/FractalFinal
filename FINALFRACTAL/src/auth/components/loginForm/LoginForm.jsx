import React from "react"
import styles from "./LoginForm.module.css"
import { useAuth } from "../../hooks/useAuth"


export function LoginForm (){

    const{
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        email,
        password,
    } = useAuth();

    return <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
            <div className={styles.inputContainer}>
                <label htmlFor="email">E-mail</label>
                <input
                type="email"
                id="email"
                placeholder="123456@gmail.com"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}/>
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                placeholder="**********"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}/>
            </div>
        </div>
        <div className={styles.actions}>
            <span>If you're not an admin, go back to the main page</span>
            <button type="submit" >Log in</button>
        </div>
    </form>
}