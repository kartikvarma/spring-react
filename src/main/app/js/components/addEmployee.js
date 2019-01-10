import React, {Component} from "react";
import {FormControl, FormGroup} from "react-bootstrap";
import Button from "react-bootstrap/es/Button";
import * as Client from '../client';
import {Redirect} from 'react-router-dom';

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        firstName: '',
        lastName: '',
        description: ''
      },
      recordSaved: false
    };

    //As class methods are not bound by default, binding class methods manually.
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleRole = this.handleRole.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  // callback function to handle firstName
  // setting state using updater function.
  // prevState object holds the up-to-date value of the previous state.
  handleFirstName(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      employee: {
        ...prevState.employee, firstName: value
      }
    }), () => console.log(this.state.employee))
  }

  // callback function to handle lastName
  handleLastName(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      employee: {
        ...prevState.employee, lastName: value
      }
    }), () => console.log(this.state.employee))
  }

  // callback function to handle description
  handleRole(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      employee: {
        ...prevState.employee, description: value
      }
    }), () => console.log(this.state.employee))
  }

  // callback function to save the record
  handleSave(e) {
    e.preventDefault();
    const data = this.state.employee;
    var resEmployee = [];
    Client.saveEmployee(data)
        .then(response => {
          resEmployee = response.data;
          this.setState({recordSaved: true}, () => console.log(resEmployee))
        })
        .catch(error => {
          console.log(error);
        });
  }

  render() {

    if (this.state.recordSaved === true) {
      return <Redirect to='/'/>
    }

    return (
        <form onSubmit={this.handleSave}>
          <FormGroup>
            <FormControl id='formControlsText'
                         type='text'
                         label='FirstName'
                         name="firstName"
                         value={this.state.employee.firstName}
                         placeholder="Enter employee's first name"
                         onChange={this.handleFirstName}
            />
          </FormGroup>
          <FormGroup>
            <FormControl id='formControlsText'
                         type='text'
                         label='LastName'
                         name="lastName"
                         value={this.state.employee.lastName}
                         placeholder="Enter employee's last name"
                         onChange={this.handleLastName}
            />
          </FormGroup>
          <FormGroup>
            <FormControl id='formControlsText'
                         type='text'
                         label='Role'
                         name="role"
                         value={this.state.employee.role}
                         placeholder="Enter employee's Role"
                         onChange={this.handleRole}
            />
          </FormGroup>
          <Button bsStyle="primary" type="submit">Add</Button>

        </form>
    )
  }

}


