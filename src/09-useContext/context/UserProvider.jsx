import { useState } from "react"
import { UserContext } from "./UserContext"

/*const user = {

  id: 123,
  email: "santimelo@gmail.com",
  phone: 1212131131,

}*/


export const UserProvider = ({ children }) => {

  const [user, setUser] = useState()

  return (

    //<UserContext.Provider value={{ hola: "Mundo", user: user}}>

    <UserContext.Provider value={ { user, setUser } }>
      
      {children}

  
    </UserContext.Provider>
  
  )

}