import React from 'react'
import { Header, Footer, ServicesSlider } from "../../../components"
import styles from './ServicePrincipalPage.module.css'

export function ServicePrincipalPage () {

    return (
      <>
        <Header />

        <div className={styles.content}>
          <h1>Our services</h1>
          <p>Take a look at the services we have to offer</p>
        </div>
        <ServicesSlider/>

        <Footer />
      </>
    )
  }