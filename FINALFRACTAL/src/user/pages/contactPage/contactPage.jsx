import React from 'react'
import { Header, Footer, ContactSection } from '../../components'

export function ContactPage () {

  const footerStyle = {
    marginTop: '-10vh'
  }

    return (
      <>
        <Header />
        
        <ContactSection/>
        
      <div style={footerStyle}>
        <Footer />
      </div>
      </>
    )
  }