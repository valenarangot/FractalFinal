import React, { useEffect, useState } from 'react'
import { db, storage } from "../../config/firebase"
import { getDocs, collection, addDoc } from "firebase/firestore"
import { ref, listAll, getDownloadURL } from 'firebase/storage'

export const useMembers = () => {
    const [members, setMembers] = useState([])
    const membersCollectionRef = collection(db, "Members")

    const [imageMembers, setImageMembers] = useState([])
    const membersImagesRef = ref(storage, "membersImages/")


    useEffect(() => {
        const getMembers = async () => {
          try{
            const data = await getDocs(membersCollectionRef);
            
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            console.log(filteredData)
            setMembers(filteredData)

            listAll(membersImagesRef).then((response) =>{
                response.items.forEach((item) => {
                    getDownloadURL(item).then((url) => {
                        setImageMembers((prev) => [...prev, url])
                    })
                })
            })

          } catch(error){
            console.error("missingMembers")
          }
        }
  
        getMembers();
      }, [])

      return(
        {
            members,
            imageMembers
        }
      )


}