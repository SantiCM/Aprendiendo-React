
export const TodoItem = ({ todo }) => {

  return (

    <li

      key={todo.id}
  
      className="list-group-item d-flex justify-content-between"
  
    >
  
      <span className="align-self-center">{todo.description}</span>
    
      <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-dark">Borrar</button>
    
    </li>
  
  );

};