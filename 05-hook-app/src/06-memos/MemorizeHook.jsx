import React, { useMemo } from 'react'
import { useCounter } from '../hooks'

import { useState } from 'react'


const heaveStuff = (iterationNumber = 100) => {
    for(let i = 0; i < iterationNumber ; i++){
        console.log("Ahi vamos...");
    }
    return `${ iterationNumber } iteraciones realizadas`
}

export const MemorizeHook = () => {

    const {counter, increment} = useCounter( 4000 )
    const [show, setShow] = useState(true)

    const messageValue = useMemo( () => heaveStuff(counter), [counter] )

  return (
    <>
        <h1>Counter: <small>{counter}</small> </h1>
        <hr/>

        <h4>{ messageValue }</h4>

        <button
            className='btn btn-primary'
            onClick={ () => increment () }
        >
            +1
        </button>

        <button
            className='btn btn-outline-primary'
            onClick={() => setShow(!show)}
        >
            Show / Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
