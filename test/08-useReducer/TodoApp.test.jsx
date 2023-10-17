import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodos } from "../../src/Hooks/useTodos"


jest.mock("../../src/Hooks/useTodos")


describe('Pruebas en <TodoApp></TodoApp>', () => { 

    useTodos.mockReturnValue({
        
        todos: [
        
            {id: 1, description: "Todo 1", done: false},
            {id: 2, description: "Todo 2", done: true}

        ],
       
        todosCount: 2,
       
        pendingTodosCount: 1,
       
        handleRemove: jest.fn(),
       
        handleToogle: jest.fn(),
       
        handle: jest.fn(),
    
    })

    test('debe de mostrar el componente correctamente', () => { 
    
        render(<TodoApp></TodoApp>)

        expect(screen.getByText("Todo 1")).toBeTruthy()

        expect(screen.getByText("Todo 2")).toBeTruthy()

        expect(screen.getByRole("textbox")).toBeTruthy()
    
    })


})