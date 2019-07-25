import React from 'react'
import Box from './Box';
import { connect } from 'react-redux';
import CardColumns from 'react-bootstrap/CardColumns'

function Search({searchAllResults}) {   
    return (
        // <div className='search'>
        //     {searchAllResults.map(item => (<Box key={item._id} details={item}/>))}
        // </div>
        <CardColumns>
            {searchAllResults.map(item => (<Box key={item._id} details={item}/>))}
        </CardColumns>
    )
}

function mapStateToProps(state) {
    return {
        searchAllResults: state.searchAllResults || [],
    };
  };
  
  export default connect(mapStateToProps)(Search);