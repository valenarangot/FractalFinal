import React, {useState} from "react"
import styles from "./Header.module.css"
import { ButtonSecond } from "../button-second/ButtonSecond"
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../../auth/hooks/useAuth"
import { useMembers } from '../../hooks/useMembers';

export function Header (){
    
    const{
        isLogged,
        handleLogOut,
        email
    } = useAuth();

    const { imageMembers} = useMembers()

    console.log(imageMembers);
    let userLogged;
     
        if (email === "valentina.arango.tenorio@gmail.com") {
            userLogged = "Valentina";
        } else if (email === "isabella.baronap@gmail.com") {
            userLogged = "Isabella";
        } else if (email === "narvaezandresfelipe23@gmail.com") {
            userLogged = "Andres";
        } else if (email === "juancdorado2001@gmail.com") {
            userLogged = "Juan Camilo";
        } else {
            userLogged = "User"; // O manejo de error según tu caso
        }

        const userName = userLogged.split(' ')[0]
        // Buscar la imagen correspondiente al proyecto actual
        const userPic = imageMembers.find((img) =>
            img.includes(userName)
        )

    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false);

    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const handleItemClick = (route) => {
        navigate(route); // Navegar a la ruta correspondiente al hacer clic en un elemento del dropdown
        setIsOpen(false); // Cerrar el dropdown después de hacer clic
    };

    const handleHover = () => {
        setIsServicesOpen(true)
    }

    const handleMouseLeave = () => {
        setIsServicesOpen(false)
    }

    return isLogged ? 
    (
        <nav className={styles.adminNav}>
            <img    onClick={() => navigate('/')} 
                    // src='../assets/icons/FractalLogo.svg' 
                    src='/FractalLogo.svg' 
                    alt="logo" />

            <ul className={styles.adminList}>
                <li className={styles.adminItem}>
                    <a onClick={() => navigate('/')}><p className={styles.adminParagraph}>About us</p></a>
                </li>
                <li className={styles.adminItem} onMouseEnter={handleHover}>
                    <a onClick={() => navigate('/services')}><p className={styles.adminParagraph}>Services</p></a>
                    {isServicesOpen && (
                        <ul className={styles.dropdownList} onMouseLeave={handleMouseLeave}>
                            <li onClick={() => navigate('/services/UX')}>UX</li>
                            <li onClick={() => navigate('/services/UI')}>UI</li>
                            <li onClick={() => navigate('/services/Frontend')}>Frontend</li>
                            <li onClick={() => navigate('/services/Branding')}>Branding</li>
                            <li onClick={() => navigate('/services/Consultancy')}>Consultancy</li>
                        </ul>
                    )}                         
                </li>
                <li className={styles.adminItem}>
                    <a onClick={() => navigate('/Projects')}><p className={styles.adminParagraph}>Portfolio</p></a>
                </li>
                <li className={styles.adminItem}>
                    <a onClick={() => navigate('/contact')}><p className={styles.adminParagraph}>Contact</p></a>
                </li>
            </ul>

            <div className={styles.dropdownWrapper}>
                <button
                    className={styles.dropdownHeader}
                    onClick={() => setIsOpen(!isOpen)}
                    >
                    {userLogged}
                    <div className={styles.profilePic}>
                        <img src={userPic}/>
                    </div>
                    <i class="fa fa-caret-down"></i>
                </button>
                {isOpen && (
                <ul className={styles.dropdownList}>
                    <li onClick={() => handleItemClick('/admin/submit')}>Add project</li>
                    <li onClick={handleLogOut}>Logout</li>
                </ul>
                )}
            </div>
        </nav>
    ) 
    :
    (
        <nav className={styles.nav}>
                <img    onClick={() => navigate('/')} 
                        // src='../assets/icons/FractalAzul.svg' 
                        src='/FractalAzul.svg' 
                        alt="logo" />

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a onClick={() => navigate('/')}><p className={styles.paragraph}>About us</p></a>
                    </li>
                    <li className={styles.item} onMouseEnter={handleHover}>
                    <a onClick={() => navigate('/services')}><p className={styles.paragraph}>Services</p></a>
                    {isServicesOpen && (
                        <ul className={styles.dropdownList} onMouseLeave={handleMouseLeave}>
                            <li onClick={() => navigate('/services/UX')}>UX</li>
                            <li onClick={() => navigate('/services/UI')}>UI</li>
                            <li onClick={() => navigate('/services/Frontend')}>Frontend</li>
                            <li onClick={() => navigate('/services/Branding')}>Branding</li>
                            <li onClick={() => navigate('/services/Consultancy')}>Consultancy</li>
                        </ul>
                    )}                         
                </li>
                    <li className={styles.item}>
                        <a onClick={() => navigate('/Projects')}><p className={styles.paragraph}>Portfolio</p></a>
                    </li>
                    <li className={styles.item}>
                        <a onClick={() => navigate('/contact')}><p className={styles.paragraph}>Contact</p></a>
                    </li>
                </ul>
                
                <ButtonSecond onClick={() => navigate('/Login')} title='ADMIN MODE' className={styles.button} />
            </nav>
    )
}