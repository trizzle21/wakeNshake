'use strict'
import { render } from 'react-dom'
import React from 'react';
import MainAppBar from "./modules/navbar.js";
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router'
import signin from "./modules/Signin.js";
import app from "./modules/app.js";

injectTapEventPlugin();

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)



render((
  <Router history={hashHistory}>
    <Route path='/' component={signin}/>
    <Route name='timer' path='/timer' component={app}/>
    <Route path='*' component={NotFound} />
  </Router>
), document.getElementById('app'))



