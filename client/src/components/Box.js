import React from 'react'
import { connect } from 'react-redux';
import { changeCollection } from '../utils/actions'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Box({details, dispatch, email}) {
    // const boxChineseFontSize = details.trad.length < 7 ? "5rem" : "3rem"
    const save = email ? <Button style={{position: 'absolute', right: '1rem', cursor: 'pointer'}} onClick={() => dispatch(changeCollection('add',details))} className='save'>SAVE</Button> : null;
    return (
        // <div className='box'>
        //     <p className='char' style={{fontSize: boxChineseFontSize}}>{details.trad}</p>
        //     <p className='pro'>{details.twpro}</p>
        //     <p className='en'>{details.en}</p>
        //     {save}
            
        // </div>
        <Card>
            <Card.Body>
                {save}
                <Card.Title>{details.trad}</Card.Title>
                <Card.Text>{details.twpro}</Card.Text>
                <Card.Text>{details.en}</Card.Text>
            </Card.Body>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        email: state.email
    };
};

export default connect(mapStateToProps)(Box)