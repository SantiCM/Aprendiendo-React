import { useEffect, useState } from "react"

export const Message = () => {

  const [cords, setCords] = useState({x:0, y:0})

    useEffect(() => {
      
      const mouseMove = ({x,y}) => {
        
        //const cord = {x, y}
        
        setCords({x,y})
      
      }

      window.addEventListener("mousemove", mouseMove)

      return () => {
        
        window.removeEventListener("mousemove", mouseMove)

      }
    }, [])
    

  return (
    
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(cords)}
    </>

  )
}
