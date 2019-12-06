import { useState } from 'react'
import { useEffect } from 'react'


export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key))
        }
        window.localStorage.setItem(key, JSON.stringify(initialValue))
        return initialValue
    })
    const setValue = value => {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue]
}

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('nightmareToken', false)
    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : ''
    }, [darkMode])
    return [darkMode, setDarkMode]
}

