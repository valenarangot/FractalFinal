import React from "react"
import { Header, Footer, Cabezote, Card1, Card2, Card3 } from "../../../components"
import styles from "./UserInterfacePage.module.css"
import { useNavigate } from 'react-router-dom'

export function UserInterfacePage (){
    
    const navigate = useNavigate()

    const items = {
        item1: 'Creation of visual elements',
        item2: 'Wireframes development',
        item3: 'Web and mobile interfaces design',
        item4: 'Prototype development',
        item5: 'Usability testing'
    }

    return (
        <>
            <Header/>
            <Cabezote type='UI' />
            <article className={styles.article}>
                <h2>UI Packages</h2>
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