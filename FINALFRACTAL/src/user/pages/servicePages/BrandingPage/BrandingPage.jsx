import React from "react"
import { Header, Footer, Cabezote, Card1, Card2, Card3 } from "../../../components"
import styles from "./BrandingPage.module.css"
import { useNavigate } from 'react-router-dom'

export function BrandingPage (){
        
    const navigate = useNavigate()

    const items = {
        item1: 'Brand identity design',
        item2: 'Brand strategy',
        item3: 'Visual assets creation',
        item4: 'Rebranding',
        item5: 'Brand monitoring and analysis'
    }

    return (
        <>
            <Header/>
            <Cabezote type='Branding' />
            <article className={styles.article}>
                <h2>Branding Packages</h2>
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