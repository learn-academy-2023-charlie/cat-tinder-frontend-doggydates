import React from "react"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = () => {
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
  )
}

export default Header