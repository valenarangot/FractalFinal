import React from "react"
import styles from "./LoginForm.module.css"
import { useNavigate } from 'react-router-dom'

export function LoginForm (){
    const navigate = useNavigate()

    const submitHandler = ()=>{
        console.log("Submit")
    }
    return <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.inputs}>
            <div className={styles.inputContainer}>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="123456@gmail.com"/>
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="**********"/>
            </div>
        </div>
        <div className={styles.actions}>
            <span>If you're not an admin, go back to the main page</span>
            <button onClick={() => navigate('/admin/submit')} >Log in</button>
        </div>
    </form>
}

export default LoginForm