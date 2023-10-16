import { render, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/Hooks/useCounter"
import { act } from "react-dom/test-utils"


describe('Pruebas en el useCounter', () => { 

    test('debe de retornar las pruebas por defecto', () => { 
         
        const { result } = renderHook(() => useCounter())
        
        const { counter, increment, decrement, reset } = result.current

        expect(counter).toBe(10)

        expect(decrement).toEqual(expect.any(Function))

        expect(increment).toEqual(expect.any(Function))

        expect(reset).toEqual(expect.any(Function))

    })

    test('debe de general el counter con el valor de 100', () => { 
     
        const { result } = renderHook(() => useCounter(100))

        expect(result.current.counter).toBe(100)
    
    })

    test('debe de incrementar el contador', () => { 
        
        const { result } = renderHook(() => useCounter(100))
        
        const { increment } = result.current

        act(() => {

            increment()
            
            increment(2)
        
        })

        expect(result.current.counter).toBe(103)

    })

    test('debe de decrementar el contador', () => { 
        
        const { result } = renderHook(() => useCounter(100))
        
        const { decrement } = result.current

        act(() => {

            decrement()
            
            decrement(2)
        
        })

        expect(result.current.counter).toBe(97)

    })

    test('debe de resetear el contador', () => { 
        
        const { result } = renderHook(() => useCounter(100))
        
        const { reset } = result.current

        act(() => {

            reset()
        
        })

        expect(result.current.counter).toBe(100)

    })


})