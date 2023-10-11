import { useEffect } from "react"
import { useForm } from "../Hooks/useForm"


export const FormWithCustomHook = () => {

  const {formState, onInputChanhge,onReset, username, email, password} = useForm({
    username: "",
    email: "",
    password: "",
  })

  // const {username, email, password} = formState

  return (
    <>

      <h1>Formulario con custom hook</h1>

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

      <input
        type='password'
        className='form-control mt-2'
        placeholder='Contraseña'
        name='password'
        value={password}
        onChange={onInputChanhge}>

      </input>

      <button onClick={onReset} className="btn btn-primary mt-2 ">Borrar</button>

      <hr />
      <hr />
    </>
  )
}
