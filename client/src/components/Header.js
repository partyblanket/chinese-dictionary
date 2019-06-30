import React from 'react'

function Header({setSearchInput, searchInput}) {
    return (
        <header>
            <input type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
        </header>
    )
}

export default Header
