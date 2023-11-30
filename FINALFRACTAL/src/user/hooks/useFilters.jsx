import { useState, useEffect } from 'react'
import { useApp } from './useApp'

export const useFilters = () => {
    
    const { projects } = useApp()

    const initTypeFilterState = JSON.parse(window.localStorage.getItem('TypeFilter')) ?? 'All'
    const initMemberFilterState = JSON.parse(window.localStorage.getItem('MemberFilter')) ?? 'All'
    
          // Filtros
          const [selectedType, setselectedType] = useState(initTypeFilterState);
          const [selectedMemberFilter, setselectedMemberFilter] = useState(initMemberFilterState);
          const [query, setQuery] = useState('');

    useEffect(() => {
        window.localStorage.setItem('TypeFilter', JSON.stringify(selectedType))
        }, [selectedType]
    )

    useEffect(() => {
        window.localStorage.setItem('MemberFilter', JSON.stringify(selectedMemberFilter))
        }, [selectedMemberFilter]
    )
      
      //Filtros
      const handleTypeChange = (filter) => {
        setselectedType(filter);
      };
      
      const handleMemberChange = (filter) => {
        setselectedMemberFilter(filter);
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
          if (selectedMemberFilter === 'All') {
            return true;
          } else {
            return project.members.includes(selectedMemberFilter);
          }
        })
        .filter((project) => {
          // Filtrar proyectos según el valor de búsqueda
          return project.title.toLowerCase().includes(query.toLowerCase());
        });
        
        // Paginación
        const [currentPage, setCurrentPage] = useState(1); // Página actual
        const projectsPerPage = 6; // Número de proyectos por página

        const indexOfLastProject = currentPage * projectsPerPage;
        const indexOfFirstProject = indexOfLastProject - projectsPerPage;
        const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
          
          // Cálculo de la cantidad total de páginas
          const pageNumbers = [];
          for (let i = 1; i <= Math.ceil(filteredProjects.length / projectsPerPage); i++) {
            pageNumbers.push(i);
          }
          
          //Cambiar de pagina
          const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      {
        selectedType,
        setselectedType,
        selectedMemberFilter,
        setselectedMemberFilter,
        query,
        setQuery,
        handleMemberChange,
        handleTypeChange,
        currentPage,
        setCurrentPage,
        currentProjects,
        paginate, 
        pageNumbers
      }
    )
  }
  