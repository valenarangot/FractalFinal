import React, { useState } from "react";
import styles from "./HeaderAdmin.module.css"; // Asegúrate de importar tus estilos CSS aquí
import { useNavigate } from 'react-router-dom';

export function HeaderAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (route) => {
    navigate(route); // Navegar a la ruta correspondiente al hacer clic en un elemento del dropdown
    setIsOpen(false); // Cerrar el dropdown después de hacer clic
  };

  return (
    <nav className={styles.nav}>
      <img onClick={() => navigate('/')} src='../assets/icons/FractalAzul.svg' alt="logo" />

      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="/"><p className={styles.paragraph}>About us</p></a>
        </li>
        <li className={styles.item}>
          <a href="/"><p className={styles.paragraph}>Services</p></a>
        </li>
        <li className={styles.item}>
          <a href="/Projects"><p className={styles.paragraph}>Portfolio</p></a>
        </li>
        <li className={styles.item}>
          <a href="/contact"><p className={styles.paragraph}>Contact</p></a>
        </li>
      </ul>

      <div className={styles.dropdownWrapper}>
        <button
          className={styles.dropdownHeader}
          onClick={() => setIsOpen(!isOpen)}
        >
          Poner dropdown
        </button>
        {isOpen && (
          <ul className={styles.dropdownList}>
            <li onClick={() => handleItemClick('/add-project')}>Add project</li>
            <li onClick={() => handleItemClick('/logout')}>Logout</li>
          </ul>
        )}
      </div>
    </nav>
  );
}