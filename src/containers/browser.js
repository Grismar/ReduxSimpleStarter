import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectFileItem } from "../actions/index";
import { fetchDirectory} from "../actions/index";
import { bindActionCreators } from "redux";

const apiHost = 'http://cathedral:5000';

class Browser extends Component {
    renderDirectories(libraryPath) {
        const items = this.props.browser_items.directories.map((directoryItem) => {
            return (
                <li
                    key={directoryItem}
                    onClick={() => this.props.fetchDirectory(
                        directoryItem,
                        `${apiHost}/v1/browser/list/${libraryPath}/${directoryItem}`
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
                        '..',
                        `${apiHost}/v1/browser/list/${libraryPath.substr(0, libraryPath.lastIndexOf('/'))}`
                    )}
                    className="list-group-item">
                    ..
                </li>
            );
        }
        return items;
    }

    renderFiles() {
        return this.props.browser_items.files.map((fileItem) => {
            return (
                <li
                    key={fileItem}
                    onClick={() => this.props.selectFileItem(fileItem)}
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
        console.log(this.props.browser_items);

        return (
            <div className="browser">
                <div className="directories" style={{height:this.state.parentHeight*.8}}>
                    <ul className="list-group col-sm-12">
                        {this.renderDirectories(libraryPath)}
                    </ul>
                </div>
                <div className="files" style={{height:this.state.parentHeight*.2}}>
                    <ul className="list-group col-sm-12">
                        {this.renderFiles()}
                    </ul>
                </div>
            </div>
        )
    }

    updateDimensions() {
        this.setState({parentHeight: window.innerHeight-100});
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
        this.props.fetchDirectory(
            null,
            `${apiHost}/v1/browser/list/default`
        );
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

function mapStateToProps(state) {
    return {
        browser_items: state.browser_items
    }
}

function mapDispatchToProps(dispatch) {
    // bind the action creator selectFileItem to the dispatch function, which dispatches to reducers
    // it returns its first argument, which is returned by this function, after which it is available on props
    return bindActionCreators({ selectFileItem: selectFileItem, fetchDirectory: fetchDirectory }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Browser)
