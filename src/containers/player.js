import React, {Component} from 'react';
import PlaybackControls from '../containers/playback_controls';
import VolumeControls from '../containers/volume_controls';
import Playing from '../containers/playing';

class Player extends Component {
  render() {
    return(
        <div className="player" id="player">
          <PlaybackControls/>
          <VolumeControls/>
          <Playing current_file={this.props.current_file} />
        </div>
    )
  }
}

export default Player;
