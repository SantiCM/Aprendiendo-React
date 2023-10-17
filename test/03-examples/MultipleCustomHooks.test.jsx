import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/Hooks/useFetch"
import { useCounter } from "../../src/Hooks/useCounter"

jest.mock("../../src/Hooks/useFetch")

jest.mock("../../src/Hooks/useCounter")


describe('Pruebas en <MultipleCustomHooks></MultipleCustomHooks>', () => { 

    const mokIncrement = jest.fn()

    useCounter.mockReturnValue({
        counter: 1,
        increment: mokIncrement,
    })

    test('debe de mostrar el componente por defecto', () => { 
    
        useFetch.mockReturnValue({
            data: null,
            isLoanding : true,
            hasError: null
        })

        render(<MultipleCustomHooks></MultipleCustomHooks>)
        
        expect(screen.getByText("Cargando...."))

        expect(screen.getByText("BreankingBad Quotes"))

        const nextButton = screen.getByRole("button", {name: "Next quote"})

        expect(nextButton.ariaDisabled).toBeTruthy

    })

    test('debe de mostrar un quote', () => { 

        useFetch.mockReturnValue({
            data: [ { author: "Santi", quote: "Hola mundo" } ],
            isLoanding : false,
            hasError: null
        })
    
        render(<MultipleCustomHooks></MultipleCustomHooks>)

        expect(screen.getByText("Hola mundo")).toBeTruthy()

        expect(screen.getByText("Santi")).toBeTruthy()

        const nextButton = screen.getByRole("button", {name: "Next quote"})

        expect(nextButton.ariaDisabled).toBeFalsy()
    
    })

    test('debe de llamar la funcion de incrementar', () => { 
        
        useFetch.mockReturnValue({
            data: [ { author: "Santi", quote: "Hola mundo" } ],
            isLoanding : false,
            hasError: null
        })

        render(<MultipleCustomHooks></MultipleCustomHooks>)
        
        const nextButton = screen.getByRole("button", {name: "Next quote"})

        fireEvent.click(nextButton)

        expect(mokIncrement).toHaveBeenCalled()

    })

})