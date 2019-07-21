import React from 'react'
import { connect } from 'react-redux';
import { changeCollection } from '../utils/actions'

function Box({details, dispatch}) {
    const boxChineseFontSize = details.trad.length < 7 ? "5rem" : "3rem"
    const save = true ? <p onClick={() => dispatch(changeCollection('add',details))} className='save'>SAVE</p> : null;
    return (
        <div className='box'>
            <p className='char' style={{fontSize: boxChineseFontSize}}>{details.trad}</p>
            <p className='pro'>{details.twpro}</p>
            <p className='en'>{details.en}</p>
            {save}
            
        </div>
    )
}

function mapStateToProps(state) {
    return {
        
    };
};

export default connect(mapStateToProps)(Box)