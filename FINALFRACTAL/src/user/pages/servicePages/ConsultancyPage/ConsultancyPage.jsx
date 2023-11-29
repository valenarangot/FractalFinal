import React from "react"
import { Header, Footer, Cabezote, Card1, Card2, Card3 } from "../../../components"
import styles from "./ConsultancyPage.module.css"
import { useNavigate } from 'react-router-dom'

export function ConsultancyPage (){
        
    const navigate = useNavigate()

    const items = {
        item1: 'Design strategy',
        item2: 'Design system development',
        item3: 'Design research and trend analysis',
        item4: 'Design workshops and training',
        item5: 'Design audits'
    }

    return (
        <>
            <Header/>
            <Cabezote type='Consultancy' />
            <article className={styles.article}>
                <h2>Consultancy Packages</h2>
                <div className={styles.cards}>
                    <Card1 items={items}/>
                    <Card2 items={items}/>
                    <Card3 items={items}/>
                </div>
                <p className={styles.paragraph}>
                    <a onClick={() => navigate('/contact')}>Contact us</a> for advice
                </p>
            </article>
            <Footer/>
        </>
    )
}