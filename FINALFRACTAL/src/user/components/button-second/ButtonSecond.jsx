import React from 'react';
import styles from './ButtonSecond.module.css'

export function ButtonSecond({title, onClick}){

    return (
        <>
            <button
            className={styles.buttonSecond}
            onClick={onClick}>
            {title}
            </button>
        </>
    )
}