
import React, { useState } from "react";
// import { AuthContext } from "./authContext";
import {auth} from "../../config/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "./useAuth"



export const useForm = () => {

    const navigate = useNavigate()

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// const {logIn, logOut} = useAuth()



const handleSubmit = (e) => {
   e.preventDefault();
   signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    console.log(userCredential);
    // logIn(email, password);
    navigate('/admin/submit');
   })
   .catch((error) =>{
    console.log("noRegistered")
   });
};

// const handleLogOut = (e) =>{
//     e.preventDefault()
//     logOut()
//     navigate('/')
// }




return{
    handleSubmit,
    // handleLogOut,
    setEmail,
    setPassword,
    email,
    password,
}




}

