import React, {useState} from 'react'
import { Header, Footer, Cabezote, ProyectCard, ModalProject } from '../../components'
import { useApp } from '../../hooks/useApp'
import styles from './ProjectsPage.module.css'

export function ProjectsPage () {

  const { projects, imageList } = useApp()
  
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
          text: 'Andrés Narvaez'
        },
        {
          id: 5,
          text: 'Juan Camilo Dorado'
        }
      ]

      const [selectedProject,setSelectedProject] = useState(null);
      const [selectedProjectImage,setSelectedProjectImage] = useState(null);

      const [selectedType, setselectedType] = useState('All');
      const [selectedMember, setselectedMember] = useState('All');
      const [query, setQuery] = useState('');
      

      const openModal = (project, projectImage) => {
            setSelectedProject(project);
            setSelectedProjectImage(projectImage);
        };
    
        const closeModal = () => {
            setSelectedProject(null);
            setSelectedProjectImage(null);
        };

      const handleTypeChange = (filter) => {
        setselectedType(filter);
      };

      const handleMemberChange = (filter) => {
        setselectedMember(filter);
      };

      const filteredProjects = projects
        .filter((project) => {
          // Filtrar proyectos según el tipo seleccionado
          if (selectedType === 'All') {
            return true;
          } else {
            return project.type.includes(selectedType);
          }
        })
        .filter((project) => {
          // Filtrar proyectos según el miembro seleccionado
          if (selectedMember === 'All') {
            return true;
          } else {
            return project.members.includes(selectedMember);
          }
        })
        .filter((project) => {
          // Filtrar proyectos según el valor de búsqueda
          return project.title.toLowerCase().includes(query.toLowerCase());
        });
        
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
                  <FilterOptions className={styles.filter} filters={memberFilters} selectedFilter={selectedMember} onFilterChange={handleMemberChange}/>
                </div>
            </div>
        </header>
        <div>
            <div className={styles.Projects}>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project)=>{
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
          {selectedFilter}
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
  
  