import { TodoList } from './components/TodoList'
import { AddTodo } from './components/AddTodo'
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {

    const { todos, todosCount , pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();
    
  return (
    <>
        <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                    TODOS={ todos } 
                    onDeleteTodo={ handleDeleteTodo } 
                    onToggleTodo={ handleToggleTodo }
                />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>
                <AddTodo onSubmit={handleNewTodo}/>
            </div>
        </div>

    </>
  )
}
