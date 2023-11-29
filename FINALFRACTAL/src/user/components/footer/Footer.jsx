import React from "react";
import styles from "./Footer.module.css"

export function Footer () {
    
    return <footer className={styles.footer}>
        <div className={styles.footerTop}>
            <img src="../assets/icons/FractalLogo.svg" alt="login" />
            <ul className={styles.list}>
                <li><a href="#"><p>Content</p></a></li>
                <li><a href="#"><p>Information</p></a></li>
                <li><a href="#"><p>Legal</p></a></li>
                <li><a href="#"><p>Help</p></a></li>
            </ul>
        </div>
        <hr className={styles.divider}/>
        <div className={styles.footerBottom}>
            <p>FractalSupport@official.com</p>
            <p>Copyright ©  2010-2021 Fractal Team. All rights reserved.</p>
            <ul className={styles.list}>
                <li>
                    <a href="#"><img src="../assets/icons/IconYoutube.svg" alt="youtube" /></a>
                </li>
                <li>
                    <a href="#"><img src="../assets/icons/IconFacebook.svg" alt="facebook" /></a>
                </li>
                <li>
                    <a href="#"><img src="../assets/icons/IconTwitter.svg" alt="twitter" /></a>
                </li>
                <li>
                    <a href="#"><img src="../assets/icons/IconInstagram.svg" alt="instagram" /></a>
                </li>
                <li>
                    <a href="#"><img src="../assets/icons/IconLinkedin.svg" alt="linkedin" /></a>
                </li>
            </ul>
        </div>
    </footer>
}