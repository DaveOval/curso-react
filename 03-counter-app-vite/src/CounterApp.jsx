import { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) =>{

    const [ counter, setCounter ] = useState( value );

    function handleAdd (){
        /* console.log(event);
        value += 1; */
        setCounter(counter + 1);
    }

    function handleReset (){
        setCounter(value)
    }

    function handleRemuve (){
        setCounter(counter - 1);
    }
    
    return (
        <>
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            <button onClick={(handleAdd)}>+1</button>
            <button onClick={(handleRemuve)}> -1 </button>
            <button onClick={(handleReset)}> reset </button>
        </>
    )

}


CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp