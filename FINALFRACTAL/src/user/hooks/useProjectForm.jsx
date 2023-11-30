
import { useState } from 'react'
import Swal from 'sweetalert2'

import { db } from '../../config/firebase'
import { storage } from '../../config/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytes } from 'firebase/storage'


export const useProjectForm = () => {
  
    const [imageUpload, setimageUpload] = useState(null)

    const handleImageChange = (event) => {
      setimageUpload(event.target.files[0])
    }
    
    const [formState, setFormState] = useState({
      title:"",
      members: [],
      type: [],
      description:"",
      behance: "",
      designTools: {
        Figma: false,
        Illustrator: false,
        Photoshop: false,
        AfterEffects: false,
        PremierePro: false
      },
      codingTools: {
        React: false,
        JS: false,
        HTML: false,
        CSS: false,
        Node: false
    }
    })
    
    const disableBtn = 
          formState.title.trim() === '' || 
          formState.description.trim() === '' || 
          formState.behance.trim() === '' ||
          formState.members.length === 0 ||
          formState.type.length === 0 ||
          imageUpload === null 
    
    const handleOnChange = ({ target }) => {
      const { name, value, type, checked } = target;
    
      if (type === 'checkbox') {
        if (name === 'members') {
          setFormState(prevFormState => {
            if (checked) {
              // Agregar el miembro si está marcado
              return {
                ...prevFormState,
                members: [...prevFormState.members, value]
              };
            } else {
              // Eliminar el miembro si no está marcado
              return {
                ...prevFormState,
                members: prevFormState.members.filter(member => member !== value)
              };
            }
          });
        }
        else if (name === 'type') {
          setFormState(prevFormState => {
            if (checked) {
              // Agregar el tipo si está marcado
              return {
                ...prevFormState,
                type: [...prevFormState.type, value]
              };
            } else {
              // Eliminar el tipo si no está marcado
              return {
                ...prevFormState,
                type: prevFormState.type.filter(item => item !== value)
              };
            }
          });
        }
         else if (name in formState.designTools || name in formState.codingTools) {
          // Resto de checkboxes (Coding tools y Design tools)
          setFormState(prevFormState => {
            const updatedDesignTools = { ...prevFormState.designTools };
            const updatedCodingTools = { ...prevFormState.codingTools };
      
            if (name in formState.designTools) {
              // Es una herramienta de diseño
              updatedDesignTools[name] = checked;
            } else {
              // Es una herramienta de codificación
              updatedCodingTools[name] = checked;
            }
      
            return {
              ...prevFormState,
              designTools: updatedDesignTools,
              codingTools: updatedCodingTools,
            };
          });
        }
      } else {
        // Otros tipos de campos (textareas, inputs, etc.)
        setFormState({
          ...formState,
          [name]: value,
        });
      }
    
      console.log(formState);
    };
    
    
    const projectsCollectionRef = collection(db, "Projects")
    
    const handleSubmit = async (event) => {
      event.preventDefault()
      try {
        if(imageUpload == null) return
        
        const imageRef = ref(storage, `projectsImages/${formState.title}`)
        uploadBytes(imageRef, imageUpload).then(() => {
          Swal.fire({
              title: 'Your project has been uploaded!',
              text: 'Check projects to see it',
              icon: 'success',
              confirmButtonText: 'Thanks!',
              customClass: {
              confirmButton: 'swal-button'
            }
          })
        })
    
        await addDoc(projectsCollectionRef, formState)
    
      } catch(error){
        Swal.fire({
            title: 'An error occurred',
            text: `${error}`,
            icon: 'error',
            confirmButtonText: 'Close',
            customClass: {
            confirmButton: 'swal-button'
          }
        })
      }
    }
   
    return (
      {
        disableBtn,
        handleImageChange,
        handleOnChange,
        handleSubmit,
        imageUpload
      }
    )
  }