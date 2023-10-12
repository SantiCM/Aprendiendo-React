

export const todoReducer = (initialState =[], action) => {
    switch (action.type) {
       
        case "Add todo":
       
         //throw new Error ("Action.type = ABC no esta implementada")
       
            return  [ ...initialState, action.payload ]
        
        case "Add todo remove":
        
            return initialState.filter(todo => todo.id !== action.payload)
 
        case "Add todo toogle todo":
            
            return initialState.map(todo => {

                if(todo.id === action.payload) {
            
                    return {
            
                        ...todo,
            
                        done: !todo.done
            
                    }
                } // id

                return todo
            })

        default:
           
           return initialState
    
    }
}