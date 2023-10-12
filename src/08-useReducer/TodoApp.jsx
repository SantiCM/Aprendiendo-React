import { TodoList } from "../08-useReducer/TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../Hooks/useTodos";


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



export const TodoApp = () => {

  const {todos, todosCount, pendingTodosCount, handleRemove, handleToogle, handle} = useTodos()

  return (
    <>
  
      <h1>
  
        Todo App: {todosCount} <small>Pendientes: {pendingTodosCount}</small>
  
      </h1>

      <div className="row">
  
        <div className="col-7">
         
          <TodoList 
          
            todos={todos} 
            
            onDeleteTodo={handleRemove}
            
            onToogleTodo={handleToogle}>
            
          </TodoList>
        
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
