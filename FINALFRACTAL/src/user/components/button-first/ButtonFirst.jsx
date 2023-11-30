import React from "react";
import styles from './ButtonFirst.module.css'

export function ButtonFirst({title, onClick, disabled}){

    return (
        <>
            <button
            className={styles.buttonFirst}
            onClick={onClick}
            disabled = {disabled}
            >
            {title}
            </button>
        </>
    )
}