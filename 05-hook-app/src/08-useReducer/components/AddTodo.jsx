import React, { useState } from 'react'

export const AddTodo = ({onSubmit}) => {

    const [description, setDescription] = useState("")

    const handleChange = ({ target }) =>{
        setDescription(target.value)
    }

    const onNewTodo = (e) => {
        e.preventDefault()
        const newTodo = { 
            id: new Date().getTime(),
            description: description,
            done: false
        }
        onSubmit(newTodo); // Pasa newTodo directamente a onSubmit
        setDescription("");
    }


  return (
    <form onSubmit={ onNewTodo }>
        <input
            type="text"
            placeholder='Que hay que hacer?'  
            className="form-control"
            onChange={ handleChange }
            />
        <button 
            type="submit"
            className="btn btn-outline-primary mt-1"   
            >
            Agregar
        </button>
    </form>
  )
}
