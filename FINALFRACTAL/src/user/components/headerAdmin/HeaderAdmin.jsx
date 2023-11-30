import React from "react"
import styles from "./Header.module.css"
import { ButtonSecond } from "../button-second/ButtonSecond"
import { useNavigate } from 'react-router-dom'

export function HeaderAdmin (){
    
  const navigate = useNavigate()

    return (
        <nav className={styles.nav}>
            <img onClick={() => navigate('/')} src='../assets/icons/FractalAzul.svg' alt="logo" />

    
            <ul className={styles.list}>
                <li className={styles.item}>
                    <a href="/"><p className={styles.paragraph}>About us</p></a>
                </li>
                <li className={styles.item}>
                    <a href="/"><p className={styles.paragraph}>Services</p></a>
                </li>
                <li className={styles.item}>
                    <a href="/Projects"><p className={styles.paragraph}>Portfolio</p></a>
                </li>
                <li className={styles.item}>
                    <a href="/contact"><p className={styles.paragraph}>Contact</p></a>
                </li>
            </ul>
            
            <ButtonSecond onClick={() => navigate('/Login')} title='LOG OUT' className={styles.button} />
        </nav>
    )
}