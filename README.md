import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
***
Header bar styling
  return(
    <div>
      <Navbar className="my-2" color="danger" dark>
        <NavbarBrand href="/">Doggy Dates</NavbarBrand>
         <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/dogindex">Dogs</NavLink>
            </NavItem>
         </Nav>
        <NavbarText>Welcome to Doggy Dates</NavbarText>
      </Navbar>
    </div>