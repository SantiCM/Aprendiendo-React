import { Routes, Route, Navigate, Link } from "react-router-dom"
import { HomePage } from "./HomePage"
import {AboutPage} from "./AboutPage"
import {LoginPage} from "./LoginPage"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"


export const MainApp = () => {
  return (
    <UserProvider>
      <h1> Main App</h1>

      <Navbar></Navbar>

      <hr></hr>
      <hr></hr>
      <hr></hr>  
      <hr></hr>

      <Routes>

        <Route path="/" element={<HomePage></HomePage>}  ></Route>

        <Route path="about" element={<AboutPage></AboutPage>}  ></Route>

        <Route path="login" element={<LoginPage></LoginPage>}  ></Route>

        {/*∫<Route path="/*" element={<LoginPage></LoginPage>}></Route>*/}

        <Route path="/*" element={<Navigate to="/about"></Navigate>}></Route>

      </Routes>
    
    </UserProvider>
  
  )
}


// El path: /* y con el Navigate es cuando entras a una ruta inexistente y te lleva a una por el componente 