import React, { useState } from 'react'
import { ButtonFirst } from '../button-first/ButtonFirst'
import styles from './ProjectForm.module.css'

export function ProjectForm () {
  const [selectedImagesCount, setSelectedImagesCount] = useState(0)

  const handleImageChange = (event) => {
    const selectedImages = event.target.files
    if (selectedImages.length <= 5) {
      setSelectedImagesCount(selectedImages.length)
    } else {
      window.alert('You can not select more than 5 images')
      event.target.value = null
    }
  }

  return (
    <form className={styles.Form}>
      <div>
        <div className={styles.InputsDiv}>

          {/* Load images */}
          <div className={styles.ImagesSection}>
            {selectedImagesCount === 0
              ? (
                <img className={styles.LoadImg} src='../assets/icons/IconLoadImage.svg' alt='Load icon' />
                )
              : (
                <h2 className={styles.LoadText}>{`${selectedImagesCount}  selected`}</h2>
                )}
            <label htmlFor='file-upload-icon' className={styles.labelInputFile}>
              <input className={styles.inputFile} type='file' id='file-upload-icon' name='images' accept='image/*' onChange={handleImageChange} multiple />
              Load Images
            </label>
            <p className={styles.LoadDescription}>You can upload up to 5 images</p>
          </div>

          {/* Inputs */}
          <div className={styles.InfoSection}>
            <h4 htmlFor='project-title'>Title*</h4>
            <input className={styles.TitleInput} type='text' id='project-title' name='projectTitle' />

            {/* Type */}
            <h4>Type of project*</h4>
            <div className={styles.Options}>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='projectType' value='UI' /> UI
              </label>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='projectType' value='UX' /> UX
              </label>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='projectType' value='Branding' /> Branding
              </label>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='projectType' value='Frontend' /> Frontend
              </label>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='projectType' value='Consultancy' /> Consultancy
              </label>
            </div>

            {/* Members */}
            <h4>Members*</h4>
            <div className={styles.Options}>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='projectMembers' value=' Valentina Arango' /> Valentina Arango
              </label>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='projectMembers' value='Isabella Barona' /> Isabella Barona
              </label>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='projectMembers' value='Juan Camilo Dorado' /> Juan Camilo Dorado
              </label>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='projectMembers' value='Andrés Narvaez' /> Andrés Narvaez
              </label>
            </div>

            {/* Design Tools */}
            <h4>Tools*</h4>
            <div className={styles.Options}>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='designTools' value='Figma' /> Figma
              </label>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='designTools' value='Illustrator' /> Illustrator
              </label>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='designTools' value='Photoshop' /> Photoshop
              </label>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='designTools' value='AfterEffects' /> After Effects
              </label>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='designTools' value='PremierePro' /> Premiere Pro
              </label>
            </div>

            {/* Coding tools */}
            <div className={styles.Options}>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='programmingTools' value='Github' /> Github
              </label>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='programmingTools' value='Javascript' /> Javascript
              </label>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='programmingTools' value='HTML' /> HTML
              </label>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='programmingTools' value='CSS' /> CSS
              </label>
              <label className={styles.CheckboxLabel}>
                <input className={styles.CheckboxInput} type='checkbox' name='programmingTools' value='NodeJs' /> NodeJs
              </label>
            </div>

            {/* Description */}
            <h4>Description*</h4>
            <textarea className={styles.DescriptionInput} id='project-description' name='projectDescription' rows='4' cols='50' />
          </div>
        </div>
      </div>

      {/* Submit */}
      <ButtonFirst title='Send' />
    </form>
  )
}
