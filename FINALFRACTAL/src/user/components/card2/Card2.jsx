import React from "react";
import './Card2.css'

export function Card2(){

    return(
        <div className="card">
            <h1 className="card-title">Pack 2</h1>
            <h3 className="card-subtitle">Experimentado</h3>
            <p className="card-description">-Creation of visual elementes.</p>
            <p className="card-description2">-Development of wireframes.</p>
            <p className="card-description3">-Web and mobile interfaces design.</p>
            <p className="card-price">$200,000</p>
            <button className="card-button">Buy</button>
        </div>
    );
}