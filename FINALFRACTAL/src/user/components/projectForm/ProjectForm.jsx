import React, { useState } from 'react'
import { ButtonFirst } from '../button-first/ButtonFirst'
import { useProjectForm } from '../../hooks/useProjectForm'
import styles from './ProjectForm.module.css'

export function ProjectForm () {

  const { 
    disableBtn,
    handleImageChange,
    handleOnChange,
    handleSubmit,
    imageUpload
  } = useProjectForm()

  return (
    <form className={styles.Form}>

      <div className={styles.Inputs}>
            <h4 htmlFor='project-title'>Title*</h4>
            <input 
              className={styles.TextInput}
              type='text'
              id='project-title'
              name='title'
              onChange={handleOnChange}
            />

        <div className={styles.Checkboxes}>
          {/* Load images */}
          <div className={styles.ImagesSection}>
            {imageUpload === null
              ? (
                <img  className={styles.LoadImg} 
                      // src='../assets/icons/IconLoadImage.svg' 
                      src='/IconLoadImage.svg' 
                      alt='Load icon' />
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

          {/* Checkboxes */}
          <div className={styles.CheckboxesSection}>
            {/* Type */}
            <h4 className={styles.labelTitles}>Type of project*</h4>
            <p className={styles.oneOptionIndicator}>Chose at least one option</p>
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
            <h4 className={styles.labelTitles}>Members*</h4>
            <p className={styles.oneOptionIndicator}>Chose at least one option</p>
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
          </div>
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

            {/* Behance */}
            <h4 htmlFor='project-title'>Behance*</h4>
            <input 
              className={styles.TextInput}
              type='text'
              id='project-behance'
              name='behance'
              onChange={handleOnChange}
            />
      </div>

      {/* Submit */}
      <div className={styles.btn}>
        <ButtonFirst title='Send' onClick={handleSubmit} disabled={disableBtn}/>
      </div>
    </form>
  )
}
