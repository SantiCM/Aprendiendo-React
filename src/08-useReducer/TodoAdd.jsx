import { useForm } from "../Hooks/useForm";



export const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChanhge, onReset} = useForm({
      
      description: ""
    
    })

    const onFormSubmit = (event) => {
      event.preventDefault()

      if(description.length <= 1) return 

      const newTodo = {
          
        done: false,
          
        id: new Date().getTime(),
          
        description: description
        
      }

      onNewTodo(newTodo)
      onReset()
    }

  return (
    <form onSubmit={onFormSubmit}>

      <input
      
        type="text"
        
        placeholder="¿Que hay que hacer?"
        
        className="form-control"
        
        name="description"
        
        value={description}
        
        onChange={onInputChanhge}
      ></input>

      <button className="btn btn-primary mt-3" type="submit">
        
        Agregar
      
      </button>
    
    </form>
  );
};
