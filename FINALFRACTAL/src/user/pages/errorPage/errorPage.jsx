import React from 'react';
import { Header, Footer, ButtonBack } from '../../components';
import styles from './ErrorPage.module.css'; // Agrega estilos si es necesario

export function ErrorPage() {
  return (
    <>
      <Header />
      <div className={styles.errorContainer}>
        <h1>Error 404</h1>
        <ButtonBack />
      </div>
      <Footer />
    </>
  );
}