import React from "react";
import './Card1.css'

export function Card1(){

    return(
        <div className="card">
            <h1 className="card-title">Pack 1</h1>
            <h3 className="card-subtitle">Principiante</h3>
            <p className="card-description">-Creation of visual elementes.</p>
            <p className="card-description2">-Development of wireframes.</p>
            <p className="card-price">$100,000</p>
            <button className="card-button">Buy</button>
        </div>
    );
}