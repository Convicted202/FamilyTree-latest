import React from 'react';
import { render } from 'react-dom';

import { Surface } from './Surface';
import { Sidebar } from './Sidebar';

require('../../stylesheets/components/BuilderView.sass');

class BuilderView extends React.Component {
    render () {
        return (
            <div className="builder-view" id="builder-view">
                <Surface />
                <Sidebar />
            </div>
        );
    }
}

export { BuilderView };
