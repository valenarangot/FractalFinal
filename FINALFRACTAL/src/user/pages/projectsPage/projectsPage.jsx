import React, {useState} from 'react'
import { Header, Footer, Cabezote, ProyectCard, ModalProject } from '../../components'
import {ProjectData} from '../../../data/projectData'
import styles from './ProjectsPage.module.css'

export function ProjectsPage () {

    const filters = [
        {
          id: 1,
          text: 'Filters',
          options: [
            {
              id: crypto.randomUUID,
              text: 'UI'
            },{
                id: crypto.randomUUID,
                text: 'UX'
              },
            {
              id: crypto.randomUUID,
              text: 'Frontend'
            },
            {
              id: crypto.randomUUID,
              text: 'Branding'
            }
          ]
        }
      ]

      const [selectedProject,setSelectedProject] = useState(null);

      console.log(ProjectData);

      const openModal = (project) => {
            setSelectedProject(project);
        };
    
        const closeModal = () => {
            setSelectedProject(null);
        };

    return (
      <>
        <Header />
        <header>
            <Cabezote type='Projects' />
            <div className={styles.search}>  
                <input type='text' placeholder='Search'></input>
                <FilterOptions className={styles.filter} filters={filters}/>
            </div>
        </header>
        <div>
            <div className={styles.Projects}>
                {ProjectData.map((project)=>(
                    <ProyectCard key={project.id} project={project} onClick={() => openModal(project)}/>
                    ))}   
            </div>
            {selectedProject && <ModalProject project={selectedProject} onClose={closeModal}/>}
        </div>
        <Footer />
      </>
    )
  }


  function FilterOptions ({ filters }) {
    const filterStyles = {
      display: 'flex',
      listStyle: 'none',
      zIndex: '2'
    }
  
    return (
      <nav style={filterStyles}>
        <ul style={filterStyles}>
          {
              filters.map((filter) => {
                return <Dropdown key={filter.id} filter={filter} />
              })
          }
        </ul>
      </nav>
    )
  }
  
  function Dropdown ({ filter }) {
    const [showList, setShowList] = useState(false)
    const { id, text, options} = filter
  
    const toggleShowList = () => setShowList(true)
  
    const toggleState = () => setShowList((prevState) => !prevState)
  
    const hoverStyle = {
      padding: ' 2vh 5vh'
    }
  
    return (
      <li key={id} onMouseLeave={toggleState}>
          <a style={hoverStyle} onMouseEnter={toggleShowList}>
            {text}
          </a>
        {
          showList ? <Dropdownlist options={options} /> : null
        }
      </li>
    )
  }
  
  function Dropdownlist ({ options }) {
    const liStyle = {
      listStyle: 'none',
      backgroundColor: '#ffffff',
      margin: '0 -5vh',
      padding: '1vh 2vh',
      cursor: 'pointer',
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
      zIndex: '2'
    }
    const ulStyle = {
      borderRadius: '8px'
    }
  
    return (
      <ul style={ulStyle}>
        {
          options?.map(({ id, text }) => {
            return (<li style={liStyle} key={id}> {text} </li>)
          })
        }
      </ul>
    )
  }
  
  
