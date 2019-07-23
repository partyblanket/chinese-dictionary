import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchAll, showHideUserDropdown } from '../utils/actions';
import UserDropDown from './UserDropDown';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'

import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'



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
            <Navbar bg='light' sticky='top' justify-content-between>
                <Navbar.Brand href="#home">A Dictionary</Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" />
                </Form>
                {/* <input type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/> */}
                { email 
                    ? <UserDropDown />
                     
                    : <Button variant='danger'>
                            <Link
                                to="/login"
                                className='head notlogged'>Log in
                            </Link>
                        </Button>
                }
            </Navbar>
            
            
            
        </>
    )
}
function mapStateToProps(state) {
    return {
        email: state.email,
    };
};

export default connect(mapStateToProps)(Header)