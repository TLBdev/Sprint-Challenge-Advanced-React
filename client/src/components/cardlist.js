import React from 'react'
import Card from './card'
import { useDarkMode } from './hooks'


function CardList(props) {

    const [darkMode, setDarkMode] = useDarkMode('nightmareToken', false)
    const toggleMode = e => {
        e.preventDefault()
        setDarkMode(!darkMode)
    }
    return (

        <div>
            <button onClick={toggleMode}>useDarkMode</button>

            <h1>Player List</h1>
            <div className='cardlist'>
                {props.data.map(e => { return <Card key={e.name} data={e} /> })}
            </div>
        </div>
    )
}

export default CardList