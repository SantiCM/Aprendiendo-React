import { useState } from "react"

export const useForm = (initialForm = {}) => {
  
    const [formState, setFormState] = useState(initialForm)
        
    const onInputChanhge = ({ target }) => {
        const { name, value } = target
        setFormState({
          ...formState,
          [name]: value
    
        })
    }

    const onReset = () => {
        setFormState(initialForm)
    }
    return {
        ...formState,
        formState,
        onInputChanhge,
        onReset
    }

}
