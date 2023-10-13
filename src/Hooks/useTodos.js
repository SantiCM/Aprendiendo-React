import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {

    return JSON.parse(localStorage.getItem("todos")) || []
  
}

export const useTodos = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])
  
    const handle = (todo) => {
  
        const action = {
  
            type: "Add todo",
  
            payload: todo
  
        }

        dispatch( action )
    }

    const handleRemove = (id) => {
  
        dispatch({
  
            type: "Add todo remove",
  
            payload: id
  
        })
    
    }

    const handleToogle = (id) => {
  
        dispatch ({
      
            type: "Add todo toogle todo",
    
            payload: id
        })

    }

    return {
        todos, 
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todos => !todos.done).length,
        handleRemove, 
        handleToogle, 
        handle, 
        
    }

}
