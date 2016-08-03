import React from 'react';
import { render } from 'react-dom';

require('../../stylesheets/components/SidebarToolbar.sass');

class SideToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editMode: false};
    }

    toggleMode(what) {
        this.setState({editMode: (what === 'edit')});
    }

    isEditMode() {
        return this.state.editMode;
    }

    getViewBtnClassList() {
        return 'btn icon-right icon-eye entypo view-button' + (this.state.editMode ? ' hidden' : '');
    }

    getEditBtnClassList() {
        return 'btn icon-right icon-pencil entypo edit-button' + (!this.state.editMode ? ' hidden' : '');
    }

    render () {
        return (
            <div className="row btn-toolbar">
                <div className="buttons">
                    <div className="btn icon-left icon-right-open-big entypo close-button"
                         onClick={ this.props.collapseSidebar }>
                        <a href="javascript:void(0)">Close</a>
                    </div>
                    <div className="toggle-edit">
                        <div className={ this.getEditBtnClassList() }
                             onClick={ this.toggleMode.bind(this, 'view') }>
                            <a href="javascript:void(0)">Edit</a>
                        </div>
                        <div className={ this.getViewBtnClassList() }
                             onClick={ this.toggleMode.bind(this, 'edit') }>
                            <a href="javascript:void(0)">View</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { SideToolbar };
