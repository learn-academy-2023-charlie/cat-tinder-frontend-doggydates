import React from "react"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarText
} from 'reactstrap';

const Footer = () => {
  return(
    <div className="footer-container">
      <Navbar className="my-2" color="danger" dark fixed="bottom">
        <NavbarBrand href="/">Doggy Dates</NavbarBrand>
         <Nav className="me-auto" navbar>
         </Nav>
        <NavbarText>&copy; Charlie 2023 | Halie | Ernesto | C Rod </NavbarText>
      </Navbar>
    </div>
  )
}

export default Footer