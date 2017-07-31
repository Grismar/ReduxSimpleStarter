import React, { Component } from 'react';
import Player from '../containers/player';
import Browser from '../containers/browser';

export default class Home extends Component {
    render() {
        return(
            <div className="full_height">
                <Player/>
                <Browser/>
            </div>
        )
    }
}
