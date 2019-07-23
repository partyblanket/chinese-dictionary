import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../utils/actions'


function UserDropDown({userDropdownStatus, dispatch}) {
    return (
        <ul className={'dropdown user ' + userDropdownStatus}>
            <li>settings</li>
            <li onClick={() => dispatch(logout())}>logout</li>
            <li>other</li>
        </ul>
    )
}

function mapStateToProps(state) {
    return {
        email: state.email,
        userDropdownStatus: state.userDropdownStatus
    };
};

export default connect(mapStateToProps)(UserDropDown)