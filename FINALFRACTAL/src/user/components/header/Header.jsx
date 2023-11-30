import React, {useState} from "react"
import styles from "./Header.module.css"
import { ButtonSecond } from "../button-second/ButtonSecond"
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../../auth/hooks/useAuth"

export function Header (){
    
    const{
        isLogged,
        handleLogOut,
    } = useAuth();


  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (route) => {
    navigate(route); // Navegar a la ruta correspondiente al hacer clic en un elemento del dropdown
    setIsOpen(false); // Cerrar el dropdown después de hacer clic
  };

    return !isLogged ? 
    (
        <nav className={styles.adminNav}>
            <img onClick={() => navigate('/')} src='../assets/icons/FractalLogo.svg' alt="logo" />

            <ul className={styles.adminList}>
                <li className={styles.adminItem}>
                <a onClick={() => navigate('/')}><p className={styles.adminParagraph}>About us</p></a>
                </li>
                <li className={styles.adminItem}>
                <a onClick={() => navigate('/services')}><p className={styles.adminParagraph}>Services</p></a>
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
                Nombre
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
                <img onClick={() => navigate('/')} src='../assets/icons/FractalAzul.svg' alt="logo" />

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a onClick={() => navigate('/services')}><p className={styles.paragraph}>About us</p></a>
                    </li>
                    <li className={styles.item}>
                        <a onClick={() => navigate('/')}><p className={styles.paragraph}>Services</p></a>
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