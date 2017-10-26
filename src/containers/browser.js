import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectFileItem, fetchDirectory, setBrowsing } from "../actions/index";
import {bindActionCreators} from "redux";

class Browser extends Component {
  renderDirectories(libraryPath) {
    const items = this.props.browser_items.directories.map((directoryItem) => {
      return (
          <li
              key={directoryItem}
              onClick={() => this.props.fetchDirectory(
                  `${libraryPath}/${directoryItem}`
              )}
              className="list-group-item">
            {directoryItem}
          </li>
      )
    });
    if (this.props.browser_items.path !== '') {
      items.unshift(
          <li
              key=".."
              onClick={() => this.props.fetchDirectory(
                  `${libraryPath.substr(0, libraryPath.lastIndexOf('/'))}`
              )}
              className="list-group-item">
            ..
          </li>
      );
    }
    return items;
  }

  renderFiles(libraryPath) {
    return this.props.browser_items.files.map((fileItem) => {
      return (
          <li
              key={fileItem}
              onClick={() => {
                this.props.selectFileItem(`${libraryPath}/${fileItem}`);
                this.props.setBrowsing(false);
              }}
              className="list-group-item">
            {fileItem}
          </li>
      )
    })
  }

  render() {
    if (!this.props.browser_items) {
      return <div>
        No files (loading).
      </div>
    }

    const libraryPath = `${this.props.browser_items.library}/${this.props.browser_items.path}`;
    const shift = this.props.browsing ? -document.getElementById("player").offsetHeight : 0;

    return (
        <div className="browser" style={{height: this.state.parentHeight - shift}}>
          <ul className="list-group col-sm-12">
            {this.renderDirectories(libraryPath)}
            {this.renderFiles(libraryPath)}
            <br/>
          </ul>
        </div>
    )
  }

  updateDimensions() {
    const player = document.getElementById("player");
    const screenButton = document.querySelector('.remote-control .btn.screen');

    this.setState({parentHeight: window.innerHeight - (player.offsetHeight + screenButton.offsetHeight) })
  }

  componentDidUpdate() {
    const browser = document.querySelector('.browser');
    if (browser) {
      browser.scrollTop = 0
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.props.fetchDirectory(
        `default`
    );
}

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}

function mapStateToProps(state) {
  return {
    browser_items: state.browser_items,
    browsing: state.browsing
  }
}

function mapDispatchToProps(dispatch) {
  // bind the action creator selectFileItem to the dispatch function, which dispatches to reducers
  // it returns its first argument, which is returned by this function, after which it is available on props
  return bindActionCreators({
    selectFileItem: selectFileItem,
    fetchDirectory: fetchDirectory,
    setBrowsing: setBrowsing
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Browser)
