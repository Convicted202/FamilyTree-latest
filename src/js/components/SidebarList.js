import React from 'react';

require('../../stylesheets/components/SidebarList.sass');

class SidebarList extends React.Component {
    render () {
        return (
            <div className="row sidebar-list">
                <section className="main-info">
                    <div className="photo">
                        <i className="icon-user"></i>
                    </div>
                    <div className="main-stats">
                        <p className="full-name">John Doe</p>
                        <p className="dates">1900-2000</p>
                    </div>
                    <div className="info">
                        <ul className="stats">
                            <li className="stat-item">
                                <b>Date of Birth: </b><p>January 01 1900</p>
                            </li>
                            <li className="stat-item">
                                <b>Born in: </b><p>Nowhere</p>
                            </li>
                            <li className="stat-item">
                                <b>Date of Death: </b><p>January 01 2000</p>
                            </li>
                            <li className="stat-item">
                                <b>Died in: </b><p>Sameplace</p>
                            </li>
                            <li className="stat-item">
                                <b>Nationality: </b><p>American</p>
                            </li>
                            <li className="stat-item">
                                <b>Etnicity: </b><p>Caucasian</p>
                            </li>
                        </ul>
                    </div>
                    <div className="family-status">
                        <ul className="stats">
                            <li className="stat-item">
                                <b>Relationship Status: </b><p>Married</p>
                            </li>
                            <li className="stat-item">
                                <b>With: </b><p>Leslie Doe and so on and so on</p>
                            </li>
                            <li className="stat-item">
                                <b>Date: </b><p>January 01 1950</p>
                            </li>
                            <li className="stat-item">
                                <b>Place: </b><p>Middle earth</p>
                            </li>
                            <li className="stat-item">
                                <b>Children: </b><p>Nowhere</p>
                            </li>
                        </ul>
                    </div>
                    <div className="additional-info">
                        <ul className="stats">
                            <li className="stat-item">
                                <b>Job: </b><p>Plumber</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export { SidebarList };
