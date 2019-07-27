import React from 'react'
import { connect } from 'react-redux'

function Collections() {
    return (
        <div>
            
        </div>
    )
}

function mapStateToProps(state) {
    return {
      email: state.email,
    };
  };
  
  export default connect(mapStateToProps)(Collections)