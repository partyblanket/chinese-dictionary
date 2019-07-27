import React, {useState} from 'react'
import { connect } from 'react-redux';
import { setAddCollectionModalState, changeCollection } from '../utils/actions'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

function NewCollectionModal({dispatch, showAddCollectionModal}) {
    const [collectionTitle, setCollectionTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeCollection('add_collection', collectionTitle));
        dispatch(setAddCollectionModalState(false));
        console.log(e);
        
        
      }
    return (
        <Modal show={showAddCollectionModal} onHide={() => dispatch(setAddCollectionModalState(false))}>
            <Modal.Header closeButton >
                <Modal.Title>Add new collection</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="add-collection-form" onSubmit={handleSubmit}>
                    <FormControl type='text' name='collection' placeholder='collection name' value={collectionTitle} onChange={e => setCollectionTitle(e.target.value)} />
                </Form>

      
            </Modal.Body>
            <Modal.Footer>
                <Button type='submit' form='add-collection-form' variant="primary">Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

function mapStateToProps(state) {
    return {
        showAddCollectionModal: state.showAddCollectionModal,
        
    };
};

export default connect(mapStateToProps)(NewCollectionModal)