import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { infoDisplay } from '../actions/index';

class Playing extends Component {
  render() {
    return (
      <div className="playing">
        <button
            className="btn btn-default info"
            onClick={() => this.props.infoDisplay()}
        />
        { !this.props.current_file &&
          <div className="current_file">No file playing.</div>
        }
        { this.props.current_file &&
          <div className="current_file">Playing {this.props.current_file}</div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    current_file: state.current_file
  };
}

function mapDispatchToProps(dispatch) {
  // bind the action creator selectFileItem to the dispatch function, which dispatches to reducers
  // it returns its first argument, which is returned by this function, after which it is available on props
  return bindActionCreators({
    infoDisplay: infoDisplay
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Playing);
