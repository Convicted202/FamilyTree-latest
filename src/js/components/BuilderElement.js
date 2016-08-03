import React from 'react';
import { render } from 'react-dom';

require('../../stylesheets/components/BuilderElement.sass');

class BuilderElement extends React.Component {
    render () {
        return (
            <div className="builder-element">
                <div className="photography-wrapper">
                    <div className="photography"><i className="icon-user"></i></div>
                </div>
                <div className="brief-info">
                    <p className="full-name">John Doe</p>
                    <p className="dates">1900-2000</p>
                </div>
            </div>
        );
    }
}

export { BuilderElement };
