import React from "react";
import styles from './ButtonBack.module.css'
import { useNavigate } from 'react-router-dom'

export function ButtonBack(){

    const navigate = useNavigate()
    
    return(
        <>
            <button
            className={styles.buttonBack}
            onClick={() => navigate(-1)}>
               <span className={styles.buttonIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="18"
                      viewBox="0 0 11 18"
                      fill="#5332D8"
                    >
                         <path d="M9.06657 17.7798L0.655273 9.36845L9.06657 0.957153L10.5596 2.45016L3.64128 9.36845L10.5596 16.2867L9.06657 17.7798Z" />
                         </svg>
                    </span>
            Go back
            </button>
        </>
    )
}