import React, { useState, useEffect } from 'react'

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const [item, setItem] = useState(initialValue)
    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageIntem = localStorage.getItem(itemName)
                let parseItem

                if (!localStorageIntem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parseItem = []
                } else {
                    parseItem = JSON.parse(localStorageIntem)
                }
                setItem(parseItem)
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }, 1000)
    })

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifiedItem)
            setItem(newItem)
        } catch (error) {
            setError(error)
        }
    }

    return { item, saveItem, loading, error }
}
export { useLocalStorage }
