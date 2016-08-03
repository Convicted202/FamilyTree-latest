import React from 'react';
import { render } from 'react-dom';

require('../../stylesheets/components/Toolbar.sass');

class Toolbar extends React.Component {
    render () {
        return (
            <div className="content-toolbar">
                <ul className="toolbar-menu">
                    <li className="toolbar-item">
                        <a href="javascript:void(0)"><i className="icon-plus"></i></a>
                    </li>
                    <li className="toolbar-item">
                        <a href="javascript:void(0)"><i className="icon-download"></i></a>
                    </li>
                    <li className="toolbar-item">
                        <a href="javascript:void(0)"><i className="icon-export"></i></a>
                    </li>
                    <li className="toolbar-item">
                        <a href="javascript:void(0)"><i className="icon-bag"></i></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export { Toolbar };
