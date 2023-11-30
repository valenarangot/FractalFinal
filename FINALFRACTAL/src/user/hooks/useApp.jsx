import React, { useEffect, useState } from 'react'
import { db, storage } from "../../config/firebase"
import { getDocs, collection, addDoc } from "firebase/firestore"
import { ref, listAll, getDownloadURL } from 'firebase/storage'

export const useApp = () => {
    
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
  
      console.log(imageList);

    


    return (
      {
        projects,
        imageList
      }
    )
  }
  