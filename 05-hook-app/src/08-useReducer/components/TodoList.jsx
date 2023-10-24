import React from 'react'
import { Todo } from './Todo'

export const TodoList = ({ TODOS = [], onDeleteTodo, onToggleTodo }) => {



  return (
    <ul className="list-group" >
        {
            TODOS.map( todo => (
                <Todo key={ todo.id }
                todo={ todo } 
                onDeleteTodo={ onDeleteTodo } 
                onToggleTodo={ onToggleTodo }
                />
            )) 
        }
    </ul>
  )
}
