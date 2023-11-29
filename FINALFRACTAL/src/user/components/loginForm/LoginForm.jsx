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
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" placeholder="**********"/>
            </div>
        </div>
        <div className={styles.actions}>
            <span>Si no eres administrador, vuelve a la página principal</span>
            <button onClick={() => navigate('/admin/submit')} >Ingresar</button>
        </div>
    </form>
}

export default LoginForm