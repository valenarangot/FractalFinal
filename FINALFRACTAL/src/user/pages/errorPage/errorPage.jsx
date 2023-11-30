import React from 'react';
import { Header, Footer, ButtonBack } from '../../components';
import styles from './errorPage.module.css'; 

export function ErrorPage() {
  return (
    <>
      <Header />
      <div className={styles.errorContainer}>
        <h1>Error 404</h1>
        <h4>The page you're looking for does not exist</h4>
        <ButtonBack />
      </div>
      <Footer />
    </>
  );
}