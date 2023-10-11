import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialSate = [
  /*{
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
  },

  {
    id: new Date().getTime() + 100,
    description: "Recolectar la piedra del infinito",
    done: false,
  },*/
];

const init = () => {

  return JSON.parse(localStorage.getItem("todos") || [])

}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialSate, init);

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

  return (
    <>
  
      <h1>
  
        Todo App: (10) <small>Pendientes: 2</small>
  
      </h1>

      <div className="row">
  
        <div className="col-7">
         
          <TodoList todos={todos} onDeleteTodo={handleRemove}></TodoList>
        
        </div>

        <div className="col-5">

          <h4>Agregar todo</h4>

          <TodoAdd onNewTodo={handle}></TodoAdd>

        </div>
      </div>

      <hr />
  
      <hr />
  
      <hr />
  
    </>
  
  );

};
