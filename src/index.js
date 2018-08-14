import ReactDOM from 'react-dom';
import './index.css';
import Website from './components/website/Website';
import Admin from './components/admin/Admin';
import Login from './components/login/Login';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';




ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Website} />
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={Login} />
        </Switch>
        
    </ BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();

