import React from 'react';
import styles from './TeamCard.module.css'

export function TeamCard ({member, imageMember, onClick}){

    return(
        <div className={styles.cardTeam}
        onClick={onClick}>
            <div className={styles.infoMember}>
                <h3>{member.name}</h3>
                <p>{member.charge}</p>
            </div>
        <img src={imageMember} className='memberimg' />
        
        </div>
    )
}