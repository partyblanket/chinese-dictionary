import React from 'react'
import { connect } from 'react-redux';

import Card from 'react-bootstrap/Card'
import DropdownCollectionSaveButton from './DropdownCollectionSaveButton';

function Box({details, dispatch, email}) {
    // const boxChineseFontSize = details.trad.length < 7 ? "5rem" : "3rem"
    return (
        // <div className='box'>
        //     <p className='char' style={{fontSize: boxChineseFontSize}}>{details.trad}</p>
        //     <p className='pro'>{details.twpro}</p>
        //     <p className='en'>{details.en}</p>
        //     {save}
            
        // </div>
        <Card>
            <Card.Body>
                {email && <DropdownCollectionSaveButton />}
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