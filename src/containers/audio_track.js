import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAudioTrack } from '../actions/index';
import 'react-dropdown/style.css';

class AudioTrack extends Component {
  constructor(props) {
    super(props);
    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option){
    console.log(option);
    // looking up the index is a bit ugle, alternatively would use object with value/label pairs; more code...
    this.props.setAudioTrack(this.props.audioTracks.tracks.indexOf(option.value));
  }

  render() {
    return (
        <div>
          { ((this.props.audioTracks!==null) && (this.props.audioTracks.tracks.length > 0)) &&
          <Dropdown
              options={this.props.audioTracks.tracks}
              value={this.props.audioTracks.tracks[this.props.audioTracks.current]}
              onChange={this._onSelect}
          />}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    audioTracks: state.audioTracks
  };
}

function mapDispatchToProps(dispatch) {
  // bind the action creator selectFileItem to the dispatch function, which dispatches to reducers
  // it returns its first argument, which is returned by this function, after which it is available on props
  return bindActionCreators({
    setAudioTrack: setAudioTrack
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioTrack);
