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
        <NavbarBrand href="/"><img src="https://see.fontimg.com/api/renderfont4/2OjA3/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/ZG9nZ3kgZGF0ZXM/dogmeal-figure.png" alt="Doggy Dates Logo" width="200px"/></NavbarBrand>
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