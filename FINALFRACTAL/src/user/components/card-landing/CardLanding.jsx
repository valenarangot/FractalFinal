import React from "react";
import styles from './CardLanding.module.css'

export function CardLanding ({content, icon}){

    return(
        <div className={styles.cardLanding}>
           <img src={icon} className={styles.cardIcon} />
           
            <div className={styles.cardContent}>
                <p>{content}</p>
            </div>
        
        </div>
    )
}