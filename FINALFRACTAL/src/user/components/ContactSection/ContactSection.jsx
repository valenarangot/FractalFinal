import React from "react"
import { ContactForm } from "../contactForm/ContactForm"
import styles from "./ContactSection.module.css"

export function ContactSection () {
    return (
    <article className={styles.container}>
        <aside className={styles.aside}>
            <section className={styles.section}>
                <header className={styles.header}>
                    <h2>Contact us!</h2>
                    <p>Are u looking for a partner for your design? You found it!</p>
                </header>
                <div className={styles.nextSteps}>
                    <h4>What are the next steps?</h4>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <img 
                                // src="assets\icons\dot.svg"
                                src="/dot.svg"
                                alt="dot" />
                            <p>1. We'll prepare a proposal.</p>
                        </li>
                        <li className={styles.listItem}>
                            <img 
                                // src="assets\icons\dot.svg"
                                src="/dot.svg"
                                alt="dot" />
                            <p>2. We'll discuss it.</p>
                        </li>
                        <li className={styles.listItem}>
                            <img 
                                // src="assets\icons\dot.svg" 
                                src="/dot.svg" 
                                alt="dot" />
                            <p>3. We'll begin building.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </aside>
        <ContactForm />
    </article>
    )
}