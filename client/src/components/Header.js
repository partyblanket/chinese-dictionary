import React from 'react'
import LoginButton from './LoginButton';

function Header({setSearchInput, searchInput}) {
    return (
        <header>
            <input type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            {/* <LoginButton />  */}
        </header>
    )
}

export default Header
