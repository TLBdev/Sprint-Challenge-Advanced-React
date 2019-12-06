import React, { useState } from 'react'



function PlotTest(props) {
    const [newData, alterData] = useState({
        'United States': 0
    })
    props.data.forEach((e) => {
        alterData({
            ...newData,
            [e.country]: 0
        })
    })
    console.log(newData)
    return (
        <div></div>
    )
}

export default PlotTest