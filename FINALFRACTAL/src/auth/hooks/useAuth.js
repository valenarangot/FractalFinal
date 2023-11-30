import { useContext, useEffect } from "react";
import { AuthContext } from '../context/AuthContext';
import {auth} from "../../config/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export const useAuth = () =>{
    const context = useContext(AuthContext)

    if(!context) {
        throw new Error (`Puede que el componente no este en el provider ${Error}}`)
    }

    const {
        isLogged,
        setIsLogged,
        email, 
        setEmail,
        password,
        setPassword
    } = context
    
    const navigate = useNavigate()

    useEffect(() => {
        window.localStorage.setItem('Logged', (isLogged))
      }, [isLogged]
      )
    
      useEffect(() => {
        window.localStorage.setItem('Email', JSON.stringify(email))
      }, [email]
      )

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            setIsLogged(true)
            console.log(email);
            navigate('/admin/submit');
        })
        .catch((error) =>{
             Swal.fire({
                 title: 'Your user is not registered',
                 text: 'If you are not an admin, please go back to the main page',
                 icon: 'error',
                 confirmButtonText: 'Close',
                 customClass: {
                 confirmButton: 'swal-button'
               }
             })
        });
     };
     
     const handleLogOut = (e) =>{
        e.preventDefault()
        setIsLogged(false)
        console.log(isLogged);
        setEmail('')
        setPassword('')
        navigate('/')
     }

    // const logIn = (email, password) => {
    //     console.log(`loggin with user data, email: ${email}, password: ${password}`);

    //     if (email !== '' && password !== '' ) {
    //         setIsLogged(true)
    //         console.log(isLogged);
    //       } else {
    //           setIsLogged(false)
    //       }
          
    // }

    // const logOut = () =>{
    //     setIsLogged(false)
    //     setEmail('')
    //     setPassword('')
    //     console.log(isLogged)
    // }

    const handleEmailChange = (value) => {
        setEmail(value)
     }

     const handlePasswordChange = (value) => {
        setPassword(value)
     }
     
    return{
        isLogged,
        // logIn,
        // logOut,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        handleLogOut,
        email,
        password
    }
       
    
}