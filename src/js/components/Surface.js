import React from 'react';
import { render } from 'react-dom';

import { Toolbar } from './Toolbar';
import { BuilderElement } from './BuilderElement';

require('../../stylesheets/components/Surface.sass');

class Surface extends React.Component {
    render () {
        return (
            <div className="surface" id="content">
                <Toolbar />
                <BuilderElement />
            </div>
        );
    }
}

export { Surface };
