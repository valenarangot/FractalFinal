import React from "react";
import './ButtonBack.css'

export function ButtonBack({title, onClick}){

    return(
        <>
            <button
            className="button-back"
            onClick={onClick}>
               <span className="button-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="18"
                      viewBox="0 0 11 18"
                      fill="#C522FF"
                    >
                         <path d="M9.06657 17.7798L0.655273 9.36845L9.06657 0.957153L10.5596 2.45016L3.64128 9.36845L10.5596 16.2867L9.06657 17.7798Z" />
                         </svg>
                    </span>
            {title} Volver
            </button>
        </>
    )
}