import {render, screen} from "@testing-library/react"

import {MainApp} from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router"

describe('Pruebas en <MainApp></MainApp>', () => { 

    test('debe de mostrar el HomePage', () => { 
    
        render(
            //Memory router nos da todo jiijji
            <MemoryRouter>
                <MainApp></MainApp>
            </MemoryRouter>
        )

        expect(screen.getByText("Home Page")).toBeTruthy()
    
    
    })

    test('debe de mostrar el LoginPage', () => { 
    
        render(
            // el initialEntries es para especificar la ruta
            <MemoryRouter initialEntries={["/login"]}>
                <MainApp></MainApp>
            </MemoryRouter>
        )

        expect(screen.getByText("Login Page")).toBeTruthy()
    
    })

    test('debe de mostrar el About Page', () => { 
    
        render(
            // el initialEntries es para especificar la ruta
            <MemoryRouter initialEntries={["/about"]}>
                <MainApp></MainApp>
            </MemoryRouter>
        )

        expect(screen.getByText("About Page")).toBeTruthy()
    
    })

})