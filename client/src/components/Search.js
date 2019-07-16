import React from 'react'
import Box from './Box';
import { connect } from 'react-redux';

function Search({searchAllResults}) {   
    return (
        <div className='search'>
            {searchAllResults.map(item => (<Box key={item._id} details={item}/>))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        searchAllResults: state.searchAllResults || [],
    };
  };
  
  export default connect(mapStateToProps)(Search);