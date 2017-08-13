import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSubtitle} from '../actions/index';
import 'react-dropdown/style.css';

class Subtitle extends Component {
  constructor(props) {
    super(props);
    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option){
    console.log(option);
    // looking up the index is a bit ugle, alternatively would use object with value/label pairs; more code...
    this.props.setSubtitle(this.props.subtitles.tracks.indexOf(option.value));
  }

  render() {
    return (
        <div>
          { ((this.props.subtitles!==null) && (this.props.subtitles.tracks.length > 0)) &&
          <Dropdown
              options={this.props.subtitles.tracks}
              value={this.props.subtitles.tracks[this.props.subtitles.current]}
              onChange={this._onSelect}
          />}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    subtitles: state.subtitles
  };
}

function mapDispatchToProps(dispatch) {
  // bind the action creator selectFileItem to the dispatch function, which dispatches to reducers
  // it returns its first argument, which is returned by this function, after which it is available on props
  return bindActionCreators({
    setSubtitle: setSubtitle
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Subtitle);
