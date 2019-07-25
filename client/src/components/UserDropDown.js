import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../utils/actions'

import NavDropdown from 'react-bootstrap/NavDropdown'


function UserDropDown({userDropdownStatus, dispatch, email}) {
    return (
        <NavDropdown title={email[0]}>
            <NavDropdown.Item>Settings</NavDropdown.Item>
            <NavDropdown.Item onClick={() => dispatch(logout())}>Logout</NavDropdown.Item>
            <NavDropdown.Item>Other</NavDropdown.Item>
        </NavDropdown>

//         <ul className={'dropdown user ' + userDropdownStatus}>
//             <li>settings</li>
//             <li onClick={() => dispatch(logout())}>logout</li>
//             <li>other</li>
//         </ul>

// <p 
// onClick={() => dispatch(showHideUserDropdown())} 
// className='head logged'
// > {email[0]} </p>
    )
}

function mapStateToProps(state) {
    return {
        email: state.email,
        userDropdownStatus: state.userDropdownStatus
    };
};

export default connect(mapStateToProps)(UserDropDown)