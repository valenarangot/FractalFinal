import React, { useState } from 'react'
import { ButtonFirst } from '../button-first/ButtonFirst'
import styles from './ProjectForm.module.css'

import { db } from '../../../config/firebase'
import { storage } from '../../../config/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytes } from 'firebase/storage'

export function ProjectForm () {

  const [imageUpload, setimageUpload] = useState(null)

  const handleImageChange = (event) => {
    setimageUpload(event.target.files[0])
  }

  const [formState, setFormState] = useState({
    title:"",
    members: [],
    type: [],
    description:"",
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
        alert('image uploaded')
      })

      await addDoc(projectsCollectionRef, formState)

    } catch(error){
      console.log(error);
    }
  }

  return (
    <form className={styles.Form}>
      <div>
        <div className={styles.InputsDiv}>

          {/* Load images */}
          <div className={styles.ImagesSection}>
            {imageUpload === null
              ? (
                <img className={styles.LoadImg} src='../assets/icons/IconLoadImage.svg' alt='Load icon' />
                )
              : (
                <h2 className={styles.LoadText}>{`image selected`}</h2>
                )}
            <label htmlFor='file-upload-icon' className={styles.labelInputFile}>
              <input 
                className={styles.inputFile} 
                type='file' 
                id='file-upload-icon' 
                name='images' 
                accept='image/*' 
                onChange={handleImageChange}
              />
              Load Images
            </label>
            <p className={styles.LoadDescription}>You can only upload one image</p>
          </div>

          {/* Inputs */}
          <div className={styles.InfoSection}>
            <h4 htmlFor='project-title'>Title*</h4>
            <input 
              className={styles.TitleInput}
              type='text'
              id='project-title'
              name='title'
              onChange={handleOnChange}
            />

            {/* Type */}
            <h4>Type of project*</h4>
            <div className={styles.Options}>
              <label className={styles.CheckboxLabel}>
                <input 
                  className={styles.CheckboxInput} 
                  type='checkbox'
                  name='type'
                  value='UI' 
                  onChange={handleOnChange}
                /> UI
              </label>
              <label className={styles.CheckboxLabel}>
                <input
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='type'
                  value='UX'
                  onChange={handleOnChange}
                /> UX
              </label>
              <label className={styles.CheckboxLabel}>
                <input
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='type'
                  value='Branding' 
                  onChange={handleOnChange}
                /> Branding
              </label>
              <label className={styles.CheckboxLabel}>
                <input
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='type'
                  value='Frontend'
                  onChange={handleOnChange}
                /> Frontend
              </label>
              <label className={styles.CheckboxLabel}>
                <input
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='type'
                  value='Consultancy'
                  onChange={handleOnChange}
                /> Consultancy
              </label>
            </div>

            {/* Members */}
            <h4>Members*</h4>
            <div className={styles.Options}>
              <label className={styles.CheckboxLabel}>
                <input
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='members'
                  value='Valentina Arango'
                  onChange={handleOnChange}
                /> Valentina Arango
              </label>
              <label className={styles.CheckboxLabel}>
                <input
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='members'
                  value='Isabella Barona'
                  onChange={handleOnChange}
                /> Isabella Barona
              </label>
              <label className={styles.CheckboxLabel}>
                <input 
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='members'
                  value='Juan Camilo Dorado'
                  onChange={handleOnChange}
                /> Juan Camilo Dorado
              </label>
              <label className={styles.CheckboxLabel}>
                <input 
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='members'
                  value='Andrés Narvaez'
                  onChange={handleOnChange}
                /> Andrés Narvaez
              </label>
            </div>

            {/* Design Tools */}
            <h4>Tools*</h4>
            <div className={styles.Options}>
              <label className={styles.CheckboxLabel}>
                <input
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='Figma'
                  onChange={handleOnChange}
                /> Figma
              </label>
              <label className={styles.CheckboxLabel}>
                <input
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='Illustrator'
                  onChange={handleOnChange}
                /> Illustrator
              </label>
              <label className={styles.CheckboxLabel}>
                <input
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='Photoshop'
                  onChange={handleOnChange}
                /> Photoshop
              </label>
              <label className={styles.CheckboxLabel}>
                <input
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='AfterEffects'
                  onChange={handleOnChange}
                /> After Effects
              </label>
              <label className={styles.CheckboxLabel}>
                <input
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='PremierePro'
                  onChange={handleOnChange}
                /> Premiere Pro
              </label>
            </div>

            {/* Coding tools */}
            <div className={styles.Options}>
              <label className={styles.CheckboxLabel}>
                <input
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='React'
                  onChange={handleOnChange}
                /> React
              </label>
              <label className={styles.CheckboxLabel}>
                <input
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='JS'
                  onChange={handleOnChange}
                /> Javascript
              </label>
              <label className={styles.CheckboxLabel}>
                <input 
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='HTML'
                  onChange={handleOnChange}
                /> HTML
              </label>
              <label className={styles.CheckboxLabel}>
                <input
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='CSS'
                  onChange={handleOnChange}
                /> CSS
              </label>
              <label className={styles.CheckboxLabel}>
                <input
                  className={styles.CheckboxInput}
                  type='checkbox'
                  name='Node'
                  onChange={handleOnChange}
                /> NodeJs
              </label>
            </div>

            {/* Description */}
            <h4>Description*</h4>
            <textarea
              className={styles.DescriptionInput}
              id='project-description'
              name='description'
              rows='4'
              cols='50'
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>

      {/* Submit */}
      <ButtonFirst title='Send' onClick={handleSubmit}/>
    </form>
  )
}
