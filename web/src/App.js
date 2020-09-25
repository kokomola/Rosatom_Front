import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";
import restricted from "./Restricted";

const App = () => (
  <Router>
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={restricted(Home)} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
