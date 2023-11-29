import React from 'react'
import { ButtonFirst } from '../button-first/ButtonFirst'
import { ButtonSecond } from '../button-second/ButtonSecond'
import { ButtonCancel } from '../buttonCancel/ButtonCancel'
import { logos } from '../../../data/toolsLogoData'
import { ProjectData } from '../../../data/projectData'
import styles from './ModalProject.module.css'

export function ModalProject ({project, onClose}) {
  console.log(project);
  // imagess: ['./assets/projects/Project1.png', './assets/projects/Project2.png', './assets/projects/Project3.png'],

  console.log(project.designTools);
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
          designToolLogos={designToolLogos}
          codingToolLogos={codingToolLogos}
          />
        </div>
    </div>
  )
}

export function Project ({ project, designToolLogos, codingToolLogos }) {
  
  const { id, images, title, type, members, description } = project

  const background = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 19.05%, rgba(0, 0, 0, 0.00) 100%), url(${images})`,
    backgroundSize: 'cover'
  }

  return (
    
    <div key={id} className={styles.Modal}>
      <div className={styles.Header} style={background}>
        {/* <div className={styles.HeaderBackground}>
          <ImagesGallery images={images} />
        </div> */}
        <div className={styles.HeaderTitle}>
          <h1> {title} </h1>
          <h3> <i>{type}</i></h3>
        </div>
      </div>
      <div className={styles.Body}>
        <div className={styles.Info}>
          <div className={styles.InfoDescription}>
            <h2> Made by: {members}</h2>
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

// function ImagesGallery ({ images }) {
//   return (
//     <div className={styles.BackgroundImage}>
//       <img src={images} alt={`Images`} />
//     </div>
//   )
// }

// function ImagesGallery ({ imagess }) {
//   return (
//     <div className={styles.BackgroundImages}>
//       {imagess.map((images, index) => (
//         <img key={index} src={images} alt={`Images ${index}`} />
//       ))}
//     </div>
//   )
// }
