import React from "react";
import './Card3.css'

export function Card3(){

    return(
        <div className="card">
            <h1 className="card-title">Pack 3</h1>
            <h3 className="card-subtitle">Senior</h3>
            <p className="card-description">-Creation of visual elementes.</p>
            <p className="card-description2">-Development of wireframes.</p>
            <p className="card-description3">-Web and mobile interfaces design.</p>
            <p className="card-description4">-Prototype development.</p>
            <p className="card-description5">-Usability testing.</p>
            <p className="card-price">$300,000</p>
            <button className="card-button">Buy</button>
        </div>
    );
}