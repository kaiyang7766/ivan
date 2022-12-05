import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route1, Switch } from 'react-router-dom';
import { HashRouter, Route, Link } from "react-router-dom";
import Canvas from './Canvas.js';
import Navbar from './Navbar.js';
import Portfolio from '../Portfolio.js';
import '../portfolio.scss';

const Main = () => {
  return(
    <>
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Canvas/>
          {/* <Navbar/> */}
        </Route>
        {/* <Route exact path="/portfolio">
          <Portfolio/>
        </Route> */}
      </Switch>
    </HashRouter>
    </>
  )
}

export default Main