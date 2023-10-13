import { Routes, Route } from "react-router-dom"
import { HomePage } from "./HomePage"
import {AboutPage} from "./AboutPage"
import {LoginPage} from "./LoginPage"


export const MainApp = () => {
  return (
    <>
      <h1> Main App</h1>
    
      <hr></hr>

      <hr></hr>
      
      <hr></hr>
      
      <hr></hr>

      <Routes>

        <Route path="/" element={<HomePage></HomePage>}  ></Route>

        


      </Routes>


    </>
  )
}
