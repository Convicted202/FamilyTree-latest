import React from 'react';
import { render } from 'react-dom';

import { Navigation } from './Navigation';

require('../../stylesheets/components/App.sass');

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="app-container">
                <div className="navigation" id="left-sidebar">
                    <Navigation />
                </div>
                <div className="content" id="main">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export { App };
