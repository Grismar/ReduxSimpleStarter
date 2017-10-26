import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import {
  skipTo,
  infoDisplay
} from '../actions/index';

class Position extends Component {
  render() {
    return(
        <div className="position control-row">
          <div className="slider-container">
            <Slider
                min={0} max={Math.floor(this.props.position.duration)}
                defaultValue={Math.floor(this.props.position.current)}
                trackStyle={{
                  backgroundColor: 'black',
                  height: 28
                }}
                handleStyle={{
                  borderColor: 'black',
                  height: 40,
                  width: 40,
                  marginLeft: -20,
                  marginTop: -6,
                  backgroundColor: 'silver',
                }}
                railStyle={{
                  height: 28
                }}
                onAfterChange={(value) => {
                  this.props.infoDisplay();
                  this.props.skipTo(value);
                }}
            />
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    position: state.position
  };
}

function mapDispatchToProps(dispatch) {
  // bind the action creator selectFileItem to the dispatch function, which dispatches to reducers
  // it returns its first argument, which is returned by this function, after which it is available on props
  return bindActionCreators({
    skipTo: skipTo,
    infoDisplay: infoDisplay
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Position);
