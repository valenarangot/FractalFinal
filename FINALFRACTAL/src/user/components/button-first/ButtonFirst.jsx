import React from "react";
import styles from './ButtonFirst.module.css'

export function ButtonFirst({title, onClick}){

    return (
        <>
            <button
            className={styles.buttonFirst}
            onClick={onClick}>
            {title}
            </button>
        </>
    )
}