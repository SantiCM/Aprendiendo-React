import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: "",
    email: ""
  })

  const { username, email } = formState

  const onInputChanhge = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value

    })
  }

  useEffect(() => {
    //console.log("useEffect")

  }, [])

  useEffect(() => {
   // console.log("form state");

  }, [formState])

  useEffect(() => {
    //console.log("email");

  }, [email])


  return (
    <>

      <h1>Formulario simple</h1>

      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChanhge}>
      </input>

      <input
        type='email'
        className='form-control mt-2'
        placeholder='benito@gmail.com'
        name='email'
        value={email}
        onChange={onInputChanhge}>

      </input>

      {
        (username === "Santi2") && <Message></Message>
      }

      <hr />
      <hr />


    </>
  )
}
