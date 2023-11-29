import React from "react";
import styles from'./ButtonCancel.module.css'

export function ButtonCancel({title, onClick}){

    return(
        <>
        
        <button 
        className={styles.buttonCancel}
        onClick={onClick}>
        {title} X
        </button>
        </>
    )

}