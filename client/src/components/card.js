import React from 'react'


function Card(props) {
    console.log(props)
    return (
        <div className='Card'>
            <h1>{`Name: ${props.data.name}`}</h1>
            <h2>{`Country: ${props.data.country}`}</h2>
            <h2>{`Searches: ${props.data.searches}`}</h2>
        </div >
    )
}

export default Card