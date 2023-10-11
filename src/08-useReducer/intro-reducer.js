// action = como quiero que cambie el estado
// siempre tiene que retornar el estado o algo del estado


const initialState = [{

    id: 1,
    
    todo: "Recolectar la piedra del Alma",
    
    done: false,

}];


const todoReducer = ( state = initialState, action = {}  ) => {

    if (action.type === "[Todo] add todo") {

        return [...state, action.payload]
    
    }
 
    return state

}

let todo = todoReducer()

const newTodo = {
    
    id: 2,
    
    todo: "Recolectar la piedra del poder",
    
    done: false

}

const addTodoAction = {
    
    type: "[Todo] add todo",
    
    payload: newTodo

}

todo = todoReducer(todo, addTodoAction)
