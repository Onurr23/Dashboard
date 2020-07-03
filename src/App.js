import React, { Component } from 'react'
import Dashboard from './html/Dashboard';
import {Switch, Route} from "react-router-dom";
import Profile from "./html/Profile";
import Url from "./html/Url";



export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>

        <Route exact path="/" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/urls" component={Url} />


        </Switch>

      </div>
    )
  }
}
