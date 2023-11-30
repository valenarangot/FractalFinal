import React from "react";
import styles from "./Card1.module.css"
import { ButtonFirst } from "../button-first/ButtonFirst";
import { useNavigate } from 'react-router-dom'

export function Card1({items}){

    const navigate = useNavigate()

    return(
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.headerFigure}>
                    <h1 className={styles.title}>Pack 1</h1>
                    <h3 className={styles.subtitle}>Beginner</h3>
                </div>
            </div>
            <ul className={styles.list}>
                <li>{items.item1}</li>
                <li>{items.item2}</li>
            </ul>
            <div className={styles.footer}>
                    <p className={styles.price}>$100,000</p>
                <div className={styles.btn}>
                    <ButtonFirst title='Buy now' onClick={() => navigate('/contact')} />
                </div>
            </div>
        </div>
    );
}