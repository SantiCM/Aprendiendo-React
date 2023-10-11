import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallbackHook = () => {

    const [counter, setCounter] = useState( 0 )

    // Con argumentos
    const increment = useCallback(
      (value) => {
        setCounter((c) => c + value)
      },
      //Sin argumentos
      /*() => {
        setCounter((value) => value + 1)
      },
      [],*/ 

    )


    
    return (
        <>
            <h1>useCallback Hook: {counter}</h1>

            <hr />

            <ShowIncrement increment={increment}></ShowIncrement>
        </>
    )
}
