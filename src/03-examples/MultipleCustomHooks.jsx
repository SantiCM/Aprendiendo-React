import { useCounter, useFetch } from "../Hooks/index"

import {LoandingQuote, Quote} from "./index"

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1)

  const { data, isLoanding, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

  const {author, quote} = !!data && data[0]

  return (
    <>
      <h1>BreankingBad Quotes</h1>
      <hr />

      {
        isLoanding
        ? <LoandingQuote></LoandingQuote>
        : <Quote author={author} quote={quote}></Quote>
      }

      <button 
        className="btn btn-primary" 

        disabled={isLoanding}
        
        onClick={() => increment()}>
        
        Next quote
      
      </button>
      
      <hr />
      <hr />
      <hr />
    </>
  )
}
