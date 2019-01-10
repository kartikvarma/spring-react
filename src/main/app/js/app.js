import React from "react";
import '../sass/main.sass'
import {Route, BrowserRouter as Router } from 'react-router-dom';
import CustomNavigation from './components/customNavigation';
import Home from './components/home';
import AddEmployee from './components/addEmployee';


export default class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="container">
            <CustomNavigation/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/addEmployee" component={AddEmployee}/>
          </div>
        </Router>
    )
  }
}

