import React from 'react'
import Box from './Box';

function Search({searchItems}) {   
    return (
        <div className='search'>
            {searchItems && searchItems.map(item => (<Box key={item._id} details={item}/>))}
        </div>
    )
}

export default Search
