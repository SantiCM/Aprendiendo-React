import { useState } from "react"
import { useCounter } from "../Hooks"
import { useMemo } from "react"


const heavyStuff = (iterationNumber = 100) => {
  for(let i = 0; i < iterationNumber; i++) {
    console.log(heavyStuff);
  }

  return `${iterationNumber} iteraciones realizadas`
}


export const MemoHook = () => {

  const {counter, increment} = useCounter(4000)

  const [show, setShow] = useState(true)

  const messageMemorize = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>

        <h4>{messageMemorize}</h4>

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
