import React from 'react';
import {HashRouter as Router, Route, Link, Redirect, Switch} from './react-router-dom'
import Home from './Home'
import Profile from './Profile'
import User from './User'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/home'>home</Link>
        <Link to='/profile'>profile</Link>
        <Link to='/user'>user</Link>
        <Switch>
          <Route path='/home/123' component={Home}></Route>
          <Route path='/home' extract={true} component={Home}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/user' component={User}></Route>
          <Redirect to='/home'></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
