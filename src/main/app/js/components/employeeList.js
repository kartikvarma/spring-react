import React, {Component} from 'react';
import {Table} from "react-bootstrap";


export default class EmployeeList extends Component {
  constructor(props) {
    super(props);

  }
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
class Employee extends Component {
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