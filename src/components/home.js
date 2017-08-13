import React, { Component } from 'react';
import Player from '../containers/player';
import Browser from '../containers/browser';
import Error from '../containers/error';

export default class Home extends Component {
    render() {
        return(
            <div className="full_height">
                <Error/>
                <Player/>
                <Browser/>
            </div>
        )
    }
}
