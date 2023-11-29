import React from "react";
import './Card2.css'
import { ButtonFirst } from "../button-first/ButtonFirst";
import { useNavigate } from 'react-router-dom'

export function Card2({items}){
    
    const navigate = useNavigate()
    
    return(
        <div className="card">
            <div>
                <h1 className="card-title">Pack 2</h1>
                <h3 className="card-subtitle">Experimented</h3>
            </div>
            <ul>
                <li className="card-description">{items.item1}</li>
                <li className="card-description2">{items.item2}</li>
                <li className="card-description3">{items.item3}</li>
            </ul>
            <p className="card-price">$200,000</p>
            <ButtonFirst title='Buy now' onClick={() => navigate('/contact')} />
        </div>
    );
}