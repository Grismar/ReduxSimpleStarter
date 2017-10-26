import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { pollPlayerState, setBrowsing, playerSwitch } from '../actions/index';
import 'react-dropdown/style.css';

function toggleFullScreen() {
  const doc = window.document;
  const docEl = doc.documentElement;

  const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
}

class RemoteControl extends Component {
  render() {
    return (
        <div className="remote-control control-row">
          <div>
            <button
                className={
                  `btn btn-default browse ${this.props.play_state === 'closed' ? '' : 'hidden'}`
                }
            />
            <button
                className={
                  `btn btn-default browse ${!this.props.browsing && this.props.play_state !== 'closed' ? '' : 'hidden'}`
                }
                onClick={ () => this.props.setBrowsing(true) }
            />
            <button
                className={
                  `btn btn-default remote ${this.props.browsing && this.props.play_state !== 'closed' ? '' : 'hidden'}`
                }
                onClick={ () => this.props.setBrowsing(false) }
            />
            <button
                className="btn btn-default screen"
                onClick={ () => this.props.pollPlayerState() }
            />
            <button
                className="btn btn-default fullscreen"
                onClick={ () => toggleFullScreen() }
            />
            <button
                className={
                  `btn btn-default ${this.props.player_preferredtype}`
                }
                onClick={() => { this.props.playerSwitch(this.props.player_preferredtype); this.props.setBrowsing(true); }}
            />
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    play_state: state.play_state,
    player_preferredtype: state.player_preferredtype,
    browsing: state.browsing
  };
}

function mapDispatchToProps(dispatch) {
  // bind the action creator selectFileItem to the dispatch function, which dispatches to reducers
  // it returns its first argument, which is returned by this function, after which it is available on props
  return bindActionCreators({
    pollPlayerState: pollPlayerState,
    setBrowsing: setBrowsing,
    playerSwitch: playerSwitch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoteControl);
