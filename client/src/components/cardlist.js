import React from 'react'
import Card from './card'
import { useDarkMode } from './hooks'
function CardList(props) {
    console.log(props)
    const [darkMode, setDarkMode] = useDarkMode('nightmareToken', false)
    const toggleMode = e => {
        e.preventDefault()
        setDarkMode(!darkMode)
    }
    return (

        <div>
            <button onClick={toggleMode}>useDarkMode</button>
            <div className='cardlist'>
                {props.data.map(e => { return <Card handleClick={props.handleClick} data={e} /> })}
            </div>
        </div>
    )
}

export default CardList