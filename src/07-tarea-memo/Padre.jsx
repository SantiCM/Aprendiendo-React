import React from 'react'
import { Hijo } from './Hijo'
import { useState, useCallback } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    
    const incrementar1 = useCallback(
        (value) => {
          setValor((c) => c + value)
        },[]
        //Sin argumentos
        /*() => {
          setCounter((value) => value + 1)
        },
        [],*/ 
  
    )


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar1 }
                    />
                ))
            }
            {/* <Hijo /> */}

            <hr />
            <hr />
            <hr />
        </div>
    )
}
