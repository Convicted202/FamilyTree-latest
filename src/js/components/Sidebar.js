import React from 'react';
import { render } from 'react-dom';

import { SideToolbar } from './SidebarToolbar';
import { SidebarList } from './SidebarList';

require('../../stylesheets/components/Sidebar.sass');

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sidebarHidden: false};
    }

    isCollapsed() {
        return 'sidebar ' + ((this.state.sidebarHidden) ? 'collapsed' : '');
    }

    render() {
        return (
            <div className={ this.isCollapsed() } id="right-sidebar">
                <SideToolbar collapseSidebar={ this.collapse.bind(this) }/>
                <SidebarList />
            </div>
        );
    }

    collapse() {
        this.setState({sidebarHidden: true});
    }
}

export { Sidebar };
