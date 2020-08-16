import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import NavBar from './components/layoutes/NavBar';
import Edit from './components/users/Edit'
import Show from './components/users/Show'
import New from './components/users/New'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PageNotFound from './components/pages/PageNotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/users/:id/edit" component={Edit}></Route>
          <Route exact path="/users/:id" component={Show}></Route>
          <Route exact path="/user/new" component={New}></Route>
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
