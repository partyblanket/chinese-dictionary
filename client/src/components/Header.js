import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { searchAll, setLoginModalState } from '../utils/actions';
import UserDropDown from './UserDropDown';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'

import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

import LoginModal from './LoginModal';
import CreateNewCollectionModal from './CreateNewCollectionModal';



function Header({dispatch, email}) {

    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        const x = setTimeout(() => {
            if(searchInput.trim() !== ''){
                dispatch(searchAll(searchInput))
            }
        },500)
        return () => {clearTimeout(x)}
    },[dispatch, searchInput])

    return (
        <>
            <Navbar bg='light' sticky='top' justify-content-between='true'>
                <Navbar.Brand href="#home">A Dictionary</Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                </Form>
                { email 
                    ? <UserDropDown />
                     
                    : <Button variant='danger' onClick={() => dispatch(setLoginModalState(true))}>
                            Log in
                        </Button>
                }
            </Navbar>
            <LoginModal />
            <CreateNewCollectionModal />
        </>
    )
}
function mapStateToProps(state) {
    return {
        email: state.email,
    };
};

export default connect(mapStateToProps)(Header)