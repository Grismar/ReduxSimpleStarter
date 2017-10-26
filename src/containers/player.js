import React, {Component} from 'react';
import PlaybackControls from '../containers/playback_controls';
import VolumeControls from '../containers/volume_controls';
import Playing from '../containers/playing';
import Position from '../containers/position';
import Subtitle from '../containers/subtitle';
import AudioTrack from '../containers/audio_track';
import RemoteControl from '../containers/remote_control';

import {connect} from 'react-redux';

class Player extends Component {
  render() {
    let shift = 0;
    if (this.props.browsing) {
      shift = this.state ? -this.state.shift : 0;
      if ((this.props.subtitles!==null) && (this.props.subtitles.tracks.length > 0)) {
        shift -= document.querySelector('.subtitles').offsetHeight;
      }
      if ((this.props.audioTracks!==null) && (this.props.audioTracks.tracks.length > 0)) {
        shift -= document.querySelector('.audiotracks').offsetHeight;
      }
    }

    return(
        <div className="player" id="player" style={{ marginTop: shift }}>
          <PlaybackControls/>
          <VolumeControls/>
          <Playing/>
          <Position />
          <Subtitle />
          <AudioTrack />
          <RemoteControl />
        </div>
    )
  }

  componentDidMount() {
    this.setState({ shift: document.querySelector('.player').offsetHeight - document.querySelector('.remote-control').offsetHeight });
  }
}

function mapStateToProps(state) {
  return {
    browsing: state.browsing,
    subtitles: state.subtitles,
    audioTracks: state.audioTracks
  };
}

export default connect(mapStateToProps)(Player);
