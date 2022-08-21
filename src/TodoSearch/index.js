import React, { useContext } from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext'

function TodoSearch() {
    const { searchValue, setSearchValue } = useContext(TodoContext)
    const onSearchValueChanged = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <input
            className="TodoSearch"
            value={searchValue}
            placeholder="Cebolla"
            onChange={onSearchValueChanged}
        />
    )
}

export { TodoSearch }
