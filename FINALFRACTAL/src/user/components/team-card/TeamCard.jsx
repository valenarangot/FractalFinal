import React from 'react';
import styles from './TeamCard.module.css'

export function TeamCard ({member, onClick}){

    return(
        <div className={styles.cardTeam}
        onClick={onClick}>
            <div>
                <h4>{member.name}</h4>
                <p>{member.charge}</p>
            </div>
        <img src={member.image} className='memberimg' />
        
        </div>
    )
}