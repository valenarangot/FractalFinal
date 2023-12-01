import React from 'react'
import styles from "./LoginPage.module.css"
import { ButtonBack  } from '../../../user/components'
import { LoginForm } from '../../components'
import { useNavigate } from 'react-router-dom'

export function LoginPage () {

    const navigate = useNavigate()

    return <main className={styles.loginContainer}>
        <aside className={styles.image}>
            <div className={styles.ButtonBack}>
                <ButtonBack onClick={() => navigate('/')}/>
            </div>
            <img 
                // src="./assets/imgs/FondoLogin.png"
                src="/FondoLogin.png" 
                alt="login" />
        </aside>
        <section className={styles.formSection}>
            <div className={styles.logo}>
                <img 
                    // src="assets\icons\FractalAzul.svg"
                    src="/FractalAzul.svg"
                    alt="login" />
            </div>
            <div className={styles.text}>
                <h3>Welcome back!</h3>
                <p>To access admin mode, fill in the following information.</p>
            </div>
            <LoginForm/>
        </section>
    </main>
}