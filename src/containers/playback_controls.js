import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  playerBack,
  playerPlay,
  playerPause,
  playerForward,
  playerStop,
  pollPlayerState,
  playerSwitch,
  playerGetType
} from '../actions/index';

class PlaybackControls extends Component {
  render() {
    if (this.props.play_state==='unknown') {
      this.props.pollPlayerState();
    }

    console.log(this.props.play_state);

    return (
        <div className="playback_controls">
          <button
              className="btn btn-default back"
              onClick={ () => this.props.playerBack() }
          />
          <button
              className={
                `btn btn-default play ${this.props.play_state === 'playing' ? 'hidden' : ''}`
              }
              onClick={ () => this.props.playerPlay() }
          />
          <button
              className={
                `btn btn-default pause ${this.props.play_state === 'playing' ? '' : 'hidden'}`
              }
              onClick={ () => this.props.playerPause() }
          />
          <button
              className="btn btn-default forward"
              onClick={() => this.props.playerForward()}
          />
          <button
              className="btn btn-default stop"
              onClick={() => this.props.playerStop()}
          />
          <button
              className={
                `btn btn-default ${this.props.player_type}`
              }
              onClick={() => this.props.playerSwitch(this.props.player_type)}
          />
        </div>
    )
  }

  componentWillMount() {
    console.log('passing here');
    this.props.playerGetType();
  }
}

function mapStateToProps(state) {
  return {
    play_state: state.play_state,
    player_type: state.player_type
  }
}

function mapDispatchToProps(dispatch) {
  // bind the action creator selectFileItem to the dispatch function, which dispatches to reducers
  // it returns its first argument, which is returned by this function, after which it is available on props
  return bindActionCreators({
    playerBack: playerBack,
    playerPlay: playerPlay,
    playerPause: playerPause,
    playerForward: playerForward,
    playerStop: playerStop,
    pollPlayerState: pollPlayerState,
    playerSwitch: playerSwitch,
    playerGetType: playerGetType
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybackControls);
