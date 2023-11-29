import React from "react"
import { Header, Footer, Cabezote, Card1, Card2, Card3 } from "../../../components"
import styles from "./UserExperiencePage.module.css"

export function UserExperiencePage (){
    return (
        <>
            <Header/>
            <Cabezote type='UX' />
            <article className={styles.article}>
                <h2>UX Packages</h2>
                <div className={styles.cards}>
                    <Card1/>
                    <Card2/>
                    <Card3/>
                </div>
                <p className={styles.paragraph}>
                    <a href="">Contact us</a> for advice
                </p>
            </article>
            <Footer/>
        </>
    )
}