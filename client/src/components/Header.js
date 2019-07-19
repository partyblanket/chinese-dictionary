import React, {useState, useEffect} from 'react'

import { connect } from 'react-redux';
import { searchAll, showHideUserDropdown } from '../utils/actions';
import UserDropDown from './UserDropDown';


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
            <header>
                <ion-icon name='ios-heart' size='large'/>
                <input type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                { email 
                    ? <p 
                        onClick={() => dispatch(showHideUserDropdown())} 
                        className='head logged'
                    > {email[0]} </p> 
                    : <p className='head notlogged'>Log in</p>
                }
                
            </header>
            <UserDropDown />
        </>
    )
}
function mapStateToProps(state) {
    return {
        email: state.email,
    };
};

export default connect(mapStateToProps)(Header)