import React, {Component} from 'react';
import * as Client from '../client';
import Employees from './employeeList';
import Jumbotron from "react-bootstrap/es/Jumbotron";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {employees: []};
  }

  componentDidMount() {
    Client.getEmployees().then(response => {
      this.setState({employees: response.data});
    });
  }

  componentWillUnmount() {
    Client.cancel().cancel('Api is being shutdown');
  }


  render() {
    return (
        <div>
          <Jumbotron>
            Organization
          </Jumbotron>
          <Employees employees={this.state.employees}/>
        </div>
    )
  }

}

