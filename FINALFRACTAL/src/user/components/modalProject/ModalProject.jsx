import React from 'react'
import { ButtonFirst } from '../button-first/ButtonFirst'
import { ButtonSecond } from '../button-second/ButtonSecond'
import { ButtonCancel } from '../buttonCancel/ButtonCancel'
import { logos } from '../../../data/toolsLogoData'
import styles from './ModalProject.module.css'

export function ModalProject ({project, projectImage, onClose}) {
  
  const userDesignTools = project.designTools
  const designToolLogos = Object.keys(userDesignTools)
    .filter((tool) => userDesignTools[tool])
    .map((tool) => logos[tool])

  const codingTools = project.codingTools
  const codingToolLogos = Object.keys(codingTools)
    .filter((tool) => codingTools[tool])
    .map((tool) => logos[tool])

  return (
    <div className={styles.Overlay}>
      <div className={styles.ModalContainer}>
        <div className={styles.CloseButton}>
          <ButtonCancel onClick={onClose} />
        </div>
        <Project
          project={project}
          projectImage={projectImage}
          designToolLogos={designToolLogos}
          codingToolLogos={codingToolLogos}
          />
        </div>
    </div>
  )
}

export function Project ({ project, projectImage, designToolLogos, codingToolLogos }) {
  
  const { id, title, type, members, description } = project

  const background = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 19.05%, rgba(0, 0, 0, 0.00) 100%), url(${projectImage})`,
    backgroundSize: 'cover'
  }

  const projectType = type.join(' - ')
  const projectMembers = members.join(', ')

  return (
    
    <div key={id} className={styles.Modal}>
      <div className={styles.Header} style={background}>
        <div className={styles.HeaderTitle}>
          <h1> {title} </h1>
          <h3> <i>{projectType}</i></h3>
        </div>
      </div>
      <div className={styles.Body}>
        <div className={styles.Info}>
          <div className={styles.InfoDescription}>
            <h2> Made by: {projectMembers}</h2>
            <p> {description}</p>
          </div>

          <div className={styles.InfoTools}>
            <h2>Tools</h2>

            <div className={styles.ToolLogos}>
              {designToolLogos.map((tool, index) => (
                <img
                  key={`designTool-${index}`}
                  src={tool}
                  alt='Design Tool'
                  className={styles.ToolLogo}
                />
              ))}
            </div>
            <div>
              {codingToolLogos.map((tool, index) => (
                <img
                  key={`codingTool-${index}`}
                  src={tool}
                  alt='Coding Tool'
                  className={styles.ToolLogo}
                />
              ))}
            </div>
          </div>

        </div>

        <div className={styles.ButtonDiv}>
          <ButtonSecond title='Go back' />
          <ButtonFirst title='Go to Behance'/>
        </div>
      </div>
    </div>
  )
}