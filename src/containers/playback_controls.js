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
  setBrowsing
} from '../actions/index';

class PlaybackControls extends Component {
  render() {
    if (this.props.play_state==='unknown') {
      this.props.pollPlayerState();
    } else {
      if (this.props.play_state === 'playing' && this.props.player_currenttype === 'unknown') {
        this.props.pollPlayerState();
      }
    }

    return (
        <div className="playback-controls control-row">
          <button
              className="btn btn-default refresh"
              onClick={ () => this.props.pollPlayerState() }
          />
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
              onClick={() => { this.props.playerStop(); this.props.setBrowsing(true); }}
          />
          <button
              className={
                `btn btn-default ${this.props.player_currenttype}`
              }
              onClick={() => { this.props.playerSwitch(this.props.player_preferredtype); this.props.setBrowsing(true); }}
          />
        </div>
    )
  }

  componentWillMount() {
    this.props.pollPlayerState();
  }
}

function mapStateToProps(state) {
  return {
    play_state: state.play_state,
    player_currenttype: state.player_currenttype,
    player_preferredtype: state.player_preferredtype
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
    setBrowsing: setBrowsing
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybackControls);
