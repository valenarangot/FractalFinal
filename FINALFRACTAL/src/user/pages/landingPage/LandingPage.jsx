import React from "react";
import { ButtonFirst, Header, TeamInteraction } from "../../components";
import styles from './LandingPage.module.css'
import { CardLanding, ServicesSlider, ContactSection, Footer } from "../../components";
import { useNavigate } from 'react-router-dom'

export function LandingPage () {
    
    const navigate = useNavigate()

    return(
        <>
            <Header />
            <div className={styles.landingContent}>
                <div className={styles.section1}>
                    <div className={styles.contentSection1Left}>
                        <h1>Welcome!</h1>
                        <p>
                        Get ready to captivate your customers! Turn your concepts into stunning interfaces with our team of UX/UI and frontend experts. Let's talk now to bring your brand to the top!
                        </p> 
                        <ButtonFirst onClick={() => navigate('/Projects')} title="See more" />
                    </div>
                    <div className={styles.contentSection1Right}>
                        <img src="./assets/background-img/fondo1.png"/>
                    </div>
                </div>

                <div className={styles.section2}>
                    <div className={styles.contentSection2Left}>
                        <h1>About us</h1>
                        <img src="./assets/background-img/fondo2.png" />
                    </div>
                    <div className={styles.contentSection2Right}>
                        <CardLanding icon='./assets/icons/flag-icon.png' content='At Fractal, our mission is to shape the digital future with creativity, passion and a unique vision. As a young and fresh agency, we are committed to deliver innovative UX/UI, frontend and branding designs that exceed our clients'/>
                        <CardLanding icon='./assets/icons/eye-icon.png' content='We aspire to lead the vanguard of design and innovation in the digital world. We seek to be the preferred choice for companies and a referenced agency in UX/UI design, frontend and branding, where creativity and innovation are our distinctive mark. '/>
                    </div>
                </div>

                <div className={styles.section3}>
                    <TeamInteraction />
                </div>

                <div className={styles.section4}>
                    <h1>Our services</h1>
                    <ServicesSlider/>
                </div>

                <div className={styles.section5}>
                    <ContactSection/>
                </div>
            </div>
            
            <Footer/>
           
        </>
    )
}