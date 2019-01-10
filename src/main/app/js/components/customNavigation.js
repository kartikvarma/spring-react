import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {Link} from 'react-router-dom';


export default class CustomNavigation extends Component {
  render() {
    return (
        <Navbar default fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link href="/" to="/">Spring &amp; React App</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/addEmployee" to="/addEmployee" componentClass={Link}>
              Add Employee
            </NavItem>
          </Nav>
        </Navbar>
    )
  }
}
