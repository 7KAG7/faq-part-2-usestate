import React from 'react';
import { BrowserRouter, Route, Switch, Link} from "react-router-dom"

import FAQContainer from "./FAQContainer"
import LauncherList from "./LauncherList"
import LauncherShow from "./LauncherShow"

const NavBar = props => {
  return (
    <div className="row column">
      <div className="navbar">
        <Link to="/FAQContainer">FAQ's</Link>
      </div>
      <div className="navbar">
        <Link to="/Launchers">Launchers</Link>
      </div>
      <Switch>
        <Route exact path="/" component={FAQContainer} />
        <Route exact path="/FAQContainer" component={FAQContainer} />
        <Route exact path="/Launchers" component={LauncherList} />
        <Route exact path="/Launcher/:id" component={LauncherShow} />
      </Switch>
      <div className="navbar">
        <p>I am the bottom of the page!</p>
      </div>
    </div>
  )
}

export default NavBar
