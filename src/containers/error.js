import React, {Component} from 'react';
import {connect} from 'react-redux';

class Error extends Component {
  render() {
    return(
      <div className={`error ${this.props.error.error ? '' : 'hidden'}`}>
        {this.props.error.message}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    error: state.error,
  }
}

export default connect(mapStateToProps)(Error);
