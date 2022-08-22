import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import { CreateTodoButtom } from '../CreateTodoButton'
import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoItem'
import { TodoForm } from '../TodoForm'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { Modal } from '../Modal'

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = useContext(TodoContext)
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
            {openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
            )}

            <CreateTodoButtom setOpenModal={setOpenModal} />
        </>
    )
}

export { AppUI }
