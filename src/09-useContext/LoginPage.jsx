import { useContext } from "react"
import { UserContext } from "./context/UserContext"


export const LoginPage = () => {

  const { user, setUser  } = useContext(UserContext)

  return (

    <>
    
      <h1> Login Page</h1>

      <hr></hr>

      <pre>

      {JSON.stringify(user, null, 3)}

      </pre>

      <button 
        className="btn btn-primary" 
        onClick={ () => setUser ( { id: 123, name: "Santi", email: "asihasiahisa@gmail.com"} ) } >
        
        Set User
      
      </button>

      <hr />
      <hr />
      <hr />
      
    
    </>
  
  )

}  