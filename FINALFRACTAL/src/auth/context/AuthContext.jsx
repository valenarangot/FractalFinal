// import { useState } from "react";
// import { AuthContext } from "./authContext";

// export function AuthContextProvider(){

//     const [isLogged, setIsLogged] = useState(false)


//     const logIn = (user) => {
//         console.log("loggin with user data", user);

//         if (user.email !== '' && user.password !== '' ) {
//             setIsLogged(true)
//           } else {
//               setIsLogged(false)
//           }
          
//           console.log(user);
//     }

//     const logOut = () =>{
//         setIsLogged(false)
//         console.log(setIsLogged)
//     }

//     return(
//         <>
//             <AuthContext.Provider value={
//                 {
//                     isLogged,
//                     logIn,
//                     logOut,
                
//                 }
//             }>

//             </AuthContext.Provider>
//         </>
//     )

// }
