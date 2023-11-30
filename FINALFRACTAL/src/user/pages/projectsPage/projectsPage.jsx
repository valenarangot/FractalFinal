import React, {useState} from 'react'
import { Header, Footer, Cabezote, ProyectCard, ModalProject } from '../../components'
import { useApp } from '../../hooks/useApp'
import styles from './projectsPage.module.css'
import { useFilters } from '../../hooks/useFilters'

export function ProjectsPage () {

  const { imageList } = useApp()

  const { 
    selectedType,
    selectedMemberFilter,
    query,
    setQuery,
    handleMemberChange,
    handleTypeChange,
    currentPage,
    currentProjects,
    paginate,
    pageNumbers
  } = useFilters()
  
    const typeFilters = [
        {
          id: 1,
          text: 'All'
        },
        {
          id: 2,
          text: 'UI'
        },
        {
          id: 3,
          text: 'UX'
        },
        {
          id: 4,
          text: 'Frontend'
        },
        {
          id: 5,
          text: 'Branding'
        }
      ]

      const memberFilters = [
        {
          id: 1,
          text: 'All'
        },
        {
          id: 2,
          text: 'Valentina Arango'
        },
        {
          id: 3,
          text: 'Isabella Barona'
        },
        {
          id: 4,
          text: 'Andres Narvaez'
        },
        {
          id: 5,
          text: 'Juan Camilo Dorado'
        }
      ]

      // Modal
      const [selectedProject,setSelectedProject] = useState(null);
      const [selectedProjectImage,setSelectedProjectImage] = useState(null);

      const openModal = (project, projectImage) => {
            setSelectedProject(project);
            setSelectedProjectImage(projectImage);
        };
    
        const closeModal = () => {
            setSelectedProject(null);
            setSelectedProjectImage(null);
        };

    return (
      <>
        <Header />
        <header>
            <Cabezote type='Projects' /> 
            <div className={styles.search}>  
                <input 
                  type='text' 
                  placeholder='Search by name'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className={styles.filterDiv}>
                  <p>Type</p>
                  <FilterOptions className={styles.filter} filters={typeFilters} selectedFilter={selectedType} onFilterChange={handleTypeChange}/>
                </div>
                <div className={styles.filterDiv}>
                  <p>Member</p>
                  <FilterOptions className={styles.filter} filters={memberFilters} selectedFilter={selectedMemberFilter} onFilterChange={handleMemberChange}/>
                </div>
            </div>
        </header>
        <div>
            <div className={styles.Projects}>
                {currentProjects.length > 0 ? (
                  currentProjects.map((project)=>{
                    // Obtener la primera palabra del título
                    const firstWord = project.title.split(' ')[0]
                    // Buscar la imagen correspondiente al proyecto actual
                    const projectImage = imageList.find((img) =>
                    img.includes(firstWord)
                    )
                    return(
                      <ProyectCard key={project.id} project={project} projectImage={projectImage} onClick={() => openModal(project, projectImage)}/>
                      )
                    }
                  )
                ) : (<h3 className={styles.noMatch}>Sorry, no project matches the filter criteria.</h3>)
              }   
            </div>
            <div className={styles.pagination}>
              {pageNumbers.map((number) => (
                <button 
                  key={number} 
                  onClick={() => paginate(number)}
                  className={currentPage === number ? styles.selected : styles.notSelected}
                >
                  {number}
                </button>
              ))}
            </div>
            {selectedProject && <ModalProject project={selectedProject} projectImage={selectedProjectImage} onClose={closeModal}/>}
        </div>
        <Footer />
      </>
    )
  }

  function FilterOptions ({ filters, selectedFilter, onFilterChange }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleFilterClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleOptionClick = (option) => {
      onFilterChange(option.text);
      setIsDropdownOpen(false);
    };
  
    return (
      <div className={styles.filterOptions}>
        <div className={styles.selectedFilter} onClick={handleFilterClick}>
          {selectedFilter}  <i class="fa fa-caret-down"></i>
        </div>
        {isDropdownOpen && (
          <ul className={styles.dropdown}>
            {filters.map((filter) => (
              <li key={filter.id} onClick={() => handleOptionClick(filter)}>
                {filter.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
  
  