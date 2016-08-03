import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import { App } from './components/App';
import { BuilderView } from './components/BuilderView';
import { PreferencesView } from './components/PreferencesView';

require('../stylesheets/_defaults.sass');

render((
    <Router history={ browserHistory }>
        <Redirect from="/" to="dashboard"/>
        <Route path="/" component={ App }>
            // <IndexRoute component={ BuilderView } />
            <Route name="playground" path="playground" component={ BuilderView } />
            <Route name="preferences" path="preferences" component={ PreferencesView } />
            <Redirect from="*" to="playground" />
        </Route>
    </Router>
), document.getElementById('app-wrapper'));
