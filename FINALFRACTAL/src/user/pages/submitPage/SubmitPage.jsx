import React from 'react'
import { Header, Footer, ProjectForm } from '../../components'
import styles from './SubmitPage.module.css'

export function SubmitPage () {

    return (
      <>
        <Header />
        <h1>Add a project</h1>
        <ProjectForm />
        <Footer />
      </>
    )
  }
  