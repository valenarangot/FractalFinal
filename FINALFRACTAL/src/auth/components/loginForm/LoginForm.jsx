import React from "react"
import styles from "./LoginForm.module.css"
import { useNavigate } from 'react-router-dom'
import { useForm } from "../../hooks/useForm"


export function LoginForm (){

    const{
        handleSubmit,
        setEmail,
        setPassword,
        email,
        password,
    } = useForm();

    const navigate = useNavigate();

    // const submitHandler = ()=>{
    //     console.log("Submit")
    // }
    return <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
            <div className={styles.inputContainer}>
                <label htmlFor="email">E-mail</label>
                <input
                type="email"
                id="email"
                placeholder="123456@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
        </div>
        <div className={styles.actions}>
            <span>If you're not an admin, go back to the main page</span>
            <button type="submit" >Log in</button>
        </div>
    </form>
}

export default LoginForm