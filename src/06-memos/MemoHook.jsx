import { useState } from "react"
import { useCounter } from "../Hooks"


export const MemoHook = () => {

    const {counter, increment} = useCounter(10)

    const [show, setShow] = useState(true)

  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>

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
