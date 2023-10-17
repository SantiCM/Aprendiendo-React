import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"


describe('Pruebas en <TodoItem></TodoItem>', () => { 

    const todo = {
        id: 1,
        description: "Piedra del alma",
        done: false,
    }

    const onDeleteTodoMock = jest.fn()

    const onToogleTodoMock =  jest.fn()

    // Si se utiliza mas de una vez, resetearse, y las limpia

    beforeEach(() => jest.clearAllMocks())

    test('debe de mostrar el TODO pendiente de completar', () => {
        
        render(

            <TodoItem 
            
                todo={ todo } 
                
                onToogleTodo={ onToogleTodoMock } 
                
                onDeleteTodo={ onDeleteTodoMock }
            
            >

            </TodoItem>
        
        )

        const liElement = screen.getByRole("listitem")

        expect(liElement.className).toBe( "list-group-item d-flex justify-content-between" )
        
        const spanElement = screen.getByLabelText("span")
        
        expect(spanElement.className).toBe("align-self-center ")
    
    })

    test('debe de mostrar el Todo completado', () => {

        todo.done = true 

        render(

            <TodoItem 
        
                todo={ todo } 
            
                onToogleTodo={ onToogleTodoMock } 
            
                onDeleteTodo={ onDeleteTodoMock }
        
            >

            </TodoItem>
    
        )   

      
        const spanElement = screen.getByLabelText("span")
    
        expect(spanElement.className).toContain("text-decoration-line-through")

    })

    test('debe de que el span debe llamar al toogle todo cuando hace click', () => { 


        render(

            <TodoItem 
    
                todo={ todo } 
        
                onToogleTodo={ onToogleTodoMock } 
        
                onDeleteTodo={ onDeleteTodoMock }
    
            >

            </TodoItem>
        
        )   

        const spanElement = screen.getByLabelText("span")

        fireEvent.click(spanElement)

        expect(onToogleTodoMock).toHaveBeenCalledWith(todo.id)
    
    })

    test('el boton dene debe de llamar el delete todo', () => { 


        render(

            <TodoItem 
    
                todo={ todo } 
        
                onToogleTodo={ onToogleTodoMock } 
        
                onDeleteTodo={ onDeleteTodoMock }
    
            >

            </TodoItem>
        
        )   

        const deleteButton = screen.getByRole("button")

        fireEvent.click(deleteButton)

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
    
    })

})