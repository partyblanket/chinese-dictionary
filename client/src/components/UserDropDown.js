import React from 'react';
import { connect } from 'react-redux';


function UserDropDown({userDropdownStatus}) {
    return (
        <ul className={'dropdown user ' + userDropdownStatus}>
            <li>settings</li>
            <li>logout</li>
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