import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Website from './components/website/Website';
import Admin from './components/admin/Admin';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Website} />
            <Route path="/admin" component={Admin} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();