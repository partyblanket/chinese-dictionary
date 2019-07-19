import React from 'react'

function Box({details}) {
    const boxChineseFontSize = details.trad.length < 7 ? "5rem" : "3rem"
    const save = true ? <p className='save'>SAVE</p> : null;
    return (
        <div className='box'>
            <p className='char' style={{fontSize: boxChineseFontSize}}>{details.trad}</p>
            <p className='pro'>{details.twpro}</p>
            <p className='en'>{details.en}</p>
            {save}
            
        </div>
    )
}

export default Box