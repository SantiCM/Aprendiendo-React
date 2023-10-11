import { useState } from "react"
import { useCounter } from "../Hooks"
import { Small } from "./Small"


export const Memorize = () => {

    const {counter, increment} = useCounter(10)

    const [show, setShow] = useState(true)



  return (
    <>
        <h1>Counter: <Small value={counter}></Small></h1>

        <button 
            className="btn btn-primary"
            onClick={() => increment()} >

            + 2

        </button>

        <button 
            className="btn btn-primary"
            onClick={() => setShow(!show)}>
            Show/Hide {JSON.stringify(show)}
        </button>

        <hr></hr>
        <hr></hr>

    </>
  )
}
