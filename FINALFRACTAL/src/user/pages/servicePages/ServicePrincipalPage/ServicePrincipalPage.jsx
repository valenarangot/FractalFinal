import React from 'react'
import { Header, Footer, ServicesSlider } from "../../../components"
import { useNavigate } from 'react-router-dom'

export function servicePrincipalPage () {

    return (
      <>
        <Header />
        
        <ServicesSlider/>

        <Footer />
      </>
    )
  }