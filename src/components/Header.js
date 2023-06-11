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
         <div id="headerlinks">
          <Nav id="me-auto" navbar>
            <NavItem>
              <NavLink href="/dogindex">Check out the Dogs!</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dognew">Join the Pack</NavLink>
            </NavItem>
          </Nav>
         </div>
        <NavbarText>Welcome to Doggy Dates</NavbarText>
      </Navbar>
    </div>   
  )
}

export default Header