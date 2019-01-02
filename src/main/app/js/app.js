import React from "react";
import ReactDOM from "react-dom";
import * as Client from "./client";
import {Table} from "react-bootstrap";
import '../sass/main.sass'
import Jumbotron from "react-bootstrap/es/Jumbotron";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {employees: []};
  }
  componentDidMount() {
    Client.getEmployees().then(response => {
      this.setState({employees: response.data});
    });
  }
  render() {
    return (
        <div className="container">
          <Jumbotron>
            <h1>Spring &amp; React App</h1>
          </Jumbotron>
          <EmployeeList employees={this.state.employees}/>
        </div>
    )
  }

}

class EmployeeList extends React.Component {
  render() {
    const employees = this.props.employees.map(employee =>
        <Employee key={employee.id} employee={employee}/>
    );
    return (
        <Table responsive bordered striped>
          <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Description</th>
          </tr>
          {employees}
          </tbody>
        </Table>
    )
  }
}

//tag::employee[]
class Employee extends React.Component {
  render() {
    return (
        <tr>
          <td>{this.props.employee.firstName}</td>
          <td>{this.props.employee.lastName}</td>
          <td>{this.props.employee.description}</td>
        </tr>
    )
  }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
);