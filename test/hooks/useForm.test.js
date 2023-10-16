import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/Hooks/useForm"


describe('Pruebas en useForm', () => {

    const initialForm = {
        name: "Santiago",
        email: "jfodjfdji@gmail.com"
    }

    test('debe de regresar la informacion por defecto', () => { 
        
        const {result} = renderHook ( () => useForm(initialForm) )

        //const {} = result.current
        
        expect(result.current).toEqual({
            
            name: initialForm.name,
            
            email: initialForm.email,
            
            formState: initialForm,
            
            onInputChanhge: expect.any(Function),
            
            onReset: expect.any(Function),
        })
        
    })

    test('debe de cambiar el nombre del formulario', () => { 
     
        const newName  = "Juan"

        const {result} = renderHook ( () => useForm(initialForm) )

        const {onInputChanhge} = result.current

        act(() => {

            onInputChanhge( { target: { name: "name", value: newName } } )

        })

        expect(result.current.name).toBe(newName)
        

        expect(result.current.formState.name).toBe(newName)

    
    })

    test('debe de realizar el reset del formulario', () => { 
     
        const newName  = "Juan"

        const {result} = renderHook ( () => useForm(initialForm) )

        const {onInputChanhge, onReset} = result.current

        act(() => {

            onInputChanhge( { target: { name: "name", value: newName } } )

            onReset()
 
        })

        expect(result.current.name).toBe(initialForm.name)
        

        expect(result.current.formState.name).toBe(initialForm.name)

    
    })

})