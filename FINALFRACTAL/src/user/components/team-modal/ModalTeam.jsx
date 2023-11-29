import React from 'react'
import { membersData } from '../../../data/membersData'
import { ButtonFirst } from '../button-first/ButtonFirst'
import { ButtonCancel } from '../buttonCancel/ButtonCancel'
import styles from './ModalTeam.module.css'

export function ModalTeam({member, onClick, onClose }){
    
    return(
    <div className={styles.Overlay}>
            
        <div className={styles.ModalTeam}>
            <div className={styles.btnClose}>
                <ButtonCancel onClick={onClose}/>
            </div>
            {/* <span className='closePreview' onClick={onclose}>
                &times;
                </span>
                <ButtonFirst onClick={onClose}/> */}
            <div className={styles.HeaderModal}>
                <div>
                    <h1>{member.name}</h1>
                    <h3>{member.charge}</h3>
                </div>
                    <img src={member.image} alt={member.name}/> 
            </div>
            <div className={styles.backgroundContent}>
                    <div className={styles.ContentModal}>
                        <div className={styles.ContentLeft}>
                            <h2>About {member.name}</h2>
                            <p>{member.description}</p> 
                        </div>
                        <div className={styles.ContentRight}>
                            <h4>Tools and skills</h4>
                            <ul>
                            {Object.entries(member.tools).map(([tool, value]) =>
                            value ? <li key={tool}>{tool}</li> : null
                            )}
                            </ul>
                        </div>
                    </div>
                <ButtonFirst className={styles.btnFirst} title='See portfolio' onClick={onclick}/>
            </div>
            
        </div>
    </div>
        
    )
}