import React from 'react'
import { connect } from 'react-redux';
// import { changeCollection } from '../utils/actions'

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function DropdownCollectionSaveButton({userCollections}) {
    return (
        <DropdownButton
            title='SAVE'
            style={{position: 'absolute', right: '1rem', cursor: 'pointer'}}
        >
            {userCollections.map((collection, index) => (
                <Dropdown.Item key={collection} eventKey={index}>{collection}</Dropdown.Item>
            ))}
            <Dropdown.Divider />
            <Dropdown.Item eventKey={userCollections.length}>New Collection</Dropdown.Item>
        </DropdownButton>
    )
}

function mapStateToProps(state) {
    return {
        userCollections: state.userCollections,
        
    };
};

export default connect(mapStateToProps)(DropdownCollectionSaveButton)