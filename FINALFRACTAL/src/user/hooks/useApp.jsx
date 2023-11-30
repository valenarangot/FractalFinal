import React, { useEffect, useState } from 'react'
import { db, storage } from "../../config/firebase"
import { getDocs, collection, addDoc } from "firebase/firestore"
import { ref, listAll, getDownloadURL } from 'firebase/storage'

export const useApp = () => {

    // Firebase
    
    const [projects, setProjects] = useState([])
    const projectsCollectionRef = collection(db, "Projects")
    
    const [imageList, setImageList] = useState([])
    const imageListRef = ref(storage, "projectsImages/")
    
      useEffect(() => {
        const getProjects = async () => {
          try {
            const data = await getDocs(projectsCollectionRef)

            const filteredData = data.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
            console.log(filteredData);
            setProjects(filteredData)

            listAll(imageListRef).then((response) =>{
              response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                  setImageList((prev) => [...prev, url])
                })
              })
            })
          } catch(error) {
            console.error(error);
          }
        }
    
        getProjects()
      }, [])
      
      // Projects pages

        // Filtros
        const [selectedType, setselectedType] = useState('All');
        const [selectedMember, setselectedMember] = useState('All');
        const [query, setQuery] = useState('');
        
        //Filtros
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
        projects,
        imageList,
        handleTypeChange,
        handleMemberChange,
        currentProjects,
        paginate,
        selectedType,
        selectedMember,
        query,
        setQuery,
        currentPage,
        pageNumbers,
        setselectedMember
      }
    )
  }
  