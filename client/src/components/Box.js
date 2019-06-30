import React from 'react'

function Box({details}) {
    return (
        <div className='box'>
            <p className='trad'>{details.trad}</p>
            <p className='en'>{details.en}</p>

            
        </div>
    )
}

export default Box