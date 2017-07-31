import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
    render() {
        if (!this.props.current_file) {
            return <div className="player">No file playing.</div>
        }
        return (
            <div className="player">Playing {this.props.current_file}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        current_file: state.current_file
    };
}

export default connect(mapStateToProps)(Player)
