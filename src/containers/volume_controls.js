import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { volumeToggleMute, volumeSet, getVolumeState } from '../actions/index';

class VolumeControls extends Component {
  render() {
    return (
        <div className="volume-controls control-row">
          <button
              className={
                `btn btn-default ${this.props.volume_state.muted ? 'mute' : 'sound'}`
              }
              onClick={() => this.props.volumeToggleMute()}
          />
          <div className="slider-container">
            <Slider
                min={0} max={100}
                defaultValue={this.props.volume_state.volume}
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
                onAfterChange={(value) => this.props.volumeSet(value)}
            />
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    volume_state: state.volume_state
  }
}

function mapDispatchToProps(dispatch) {
  // bind the action creator selectFileItem to the dispatch function, which dispatches to reducers
  // it returns its first argument, which is returned by this function, after which it is available on props
  return bindActionCreators({
    volumeToggleMute: volumeToggleMute,
    volumeSet: volumeSet,
    getVolumeState: getVolumeState
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VolumeControls);
