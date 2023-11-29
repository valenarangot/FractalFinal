import React from 'react'
import styles from './Cabezote.module.css'
import { ButtonBack } from '../buttonBack/ButtonBack'

const typeInfo = [
  {
    type: 'UI',
    title: 'User interface design',
    description: 'We can design the visual appearance and layout of your application, website or software and make it an user-friendly product.'
  },
  {
    type: 'UX',
    title: 'User experience design',
    description: 'We specialize in enhancing the user experience through intuitive design, ensuring an user-centric product.'
  },
  {
    type: 'Frontend',
    title: 'Frontend',
    description: 'We can craft the visual presentation and user interface of your product, ensuring a responsive and efficient user experience.'
  },
  {
    type: 'Branding',
    title: 'Branding',
    description: 'Our focus lies in establishing a strong brand identity for your business, creating a cohesive and memorable image across all touchpoints.'
  },
  {
    type: 'Consultancy',
    title: 'Consultancy',
    description: 'We offer expert guidance and strategic insights to optimize your project and help you achieve your goals.'
  },
  {
    type: 'Projects',
    title: 'Our projects',
    description: 'Explore our projects'
  }
]

export function Cabezote ({ type }) {
  const backgroundImageClass = styles[type]
  const typeData = typeInfo.find(item => item.type === type)

  return (
    <header className={`${styles.Slider} ${backgroundImageClass}`}>
      <div className={styles.TextDiv}>
        <div className={styles.GoBack}>
          {type === 'Projects' ? ('') : (<ButtonBack />)}
        </div>
        <h1 className={styles.Title}>{typeData.title}</h1>
        <p className={styles.Description}>{typeData.description}</p>
      </div>
    </header>
  )
}
