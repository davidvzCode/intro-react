import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import { CreateTodoButtom } from '../CreateTodoButton'
import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoItem'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'

function AppUI() {
    const { error, loading, searchedTodos, completeTodo, deleteTodo } =
        useContext(TodoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {!loading && !searchedTodos.length && (
                    <p>¡Crea tu primer TODO!</p>
                )}

                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButtom />
        </>
    )
}

export { AppUI }
