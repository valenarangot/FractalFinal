import React from "react"
import { Header, Footer, Cabezote, Card1, Card2, Card3 } from "../../../components"
import styles from "./FrontendPage.module.css"
import { useNavigate } from 'react-router-dom'

export function FrontendPage (){    

    const navigate = useNavigate()

    const items = {
        item1: 'Frontend development (javaScript, HTML, CSS)',
        item2: 'Component library development',
        item3: 'Performance optimization',
        item4: 'Accessibility implementation',
        item5: 'Code reviews and quality assurance'
    }

    return (
        <>
            <Header/>
            <Cabezote type='Frontend' />
            <article className={styles.article}>
                <h2>Frontend Packages</h2>
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