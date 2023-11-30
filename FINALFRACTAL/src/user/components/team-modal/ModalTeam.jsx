import React from 'react'
import { membersData } from '../../../data/membersData'
import { ButtonFirst } from '../button-first/ButtonFirst'
import { ButtonCancel } from '../buttonCancel/ButtonCancel'
import styles from './ModalTeam.module.css'
import { logos } from '../../../data/toolsLogoData'
import { useApp } from '../../hooks/useApp'
import { useNavigate } from 'react-router-dom'

export function ModalTeam({member, image, onClose }){
    
    const navigate = useNavigate()

    const memberTools = member.tools
    const usedTools = Object.keys(memberTools)
        .filter((tool) => memberTools[tool])
        .map((tool) => logos[tool])

    return(
    <div className={styles.Overlay}>
            
        <div className={styles.ModalTeam}>
            <div className={styles.btnClose}>
                <ButtonCancel onClick={onClose}/>
            </div>
            
            <div className={styles.HeaderModal}>
                <div>
                    <h1>{member.name}</h1>
                    <h3>{member.charge}</h3>
                </div>
                    <img src={image} alt={member.name}/> 

                    <div className={styles.playing}>

                        <div className={styles.wave}></div>
                        <div className={styles.wave}></div>
                        <div className={styles.wave}></div>
                    
                    </div>
                        
             </div>

            <div className={styles.backgroundContent}>
                    <div className={styles.ContentModal}>
                        <div className={styles.ContentLeft}>
                            <h2>About {member.name}</h2>
                            <p>{member.description}</p> 
                        </div>
                       
                        <div className={styles.ContentRight}>
                            <h4>Tools and skills</h4>

                            <div className={styles.ToolLogos}>
                            {usedTools.map((tool, index) => (
                                <img
                                key={`designTool-${index}`}
                                src={tool}
                                alt='Design Tool'
                                className={styles.ToolLogo}
                                />
                            ))}
                            </div>
                         
                        </div>

                        {/* <div className={styles.ContentRight}>
                            <h4>Tools and skills</h4>
                            <ul>
                            {Object.entries(member.tools).map(([tool, value]) =>
                            value ? <li key={tool}>{tool}</li> : null
                            )}
                            </ul>
                        </div> */}
                    </div>
                <ButtonFirst className={styles.btnFirst} title='See portfolio' onClick={() => navigate('/projects')}/>
            </div>
            
        </div>
    </div>
        
    )
}