import React, {useState, useEffect} from 'react'

import {connect} from 'react-redux'
import { searchAll } from '../utils/actions';


function Header({dispatch}) {

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
        <header>
            <input type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
        </header>
    )
}
function mapStateToProps(state) {
    return {
    };
};

export default connect(mapStateToProps)(Header)