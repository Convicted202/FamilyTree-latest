import React from 'react';
import { Link, IndexLink } from 'react-router';

require('../../stylesheets/components/Navigation.sass');

class Navigation extends React.Component {
    render () {
        return (
            <ul className="menu">
                <li className="menu-item menu-user">
                    <IndexLink to="/"><i className="icon-user"></i></IndexLink>
                </li>
                <li className="menu-item">
                    <Link to="playground" activeClassName="active"><i className="icon-flow-tree"></i></Link>
                </li>
                <li className="menu-item">
                    <Link to="preferences" activeClassName="active"><i className="icon-tools"></i></Link>
                </li>
                <li className="menu-item menu-logo">
                    <IndexLink to="/"><i className="icon-home"></i></IndexLink>
                </li>
            </ul>
        );
    }
}

export { Navigation };
