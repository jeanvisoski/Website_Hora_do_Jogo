import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Website from './components/website/Website';

const app = () => (
  <Router>
    <div>
      <Route exact path="/" component={web} />
      <Route path="/admin" component={Admin} />
    </div>
  </Router>



);

const web = () => (
  <Website />

);

const Admin = () => (
  <div>
    <h2>admin em desenvolvimento</h2>
  </div>
);


export default app;