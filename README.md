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
  return
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


 PASS  src/__tests__/NotFound.test.js
 PASS  src/__tests__/Footer.test.js (5.259 s)
 PASS  src/__tests__/Home.test.js
 PASS  src/__tests__/Header.test.js

Test Suites: 4 passed, 4 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        10.176 s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.

<Card
  style={{
    width: '18rem'
  }}
  key={index}
>
  <img
    alt={`profile of a dog named ${dog.name}`}
    src={dog.image}
  />
  <CardBody>
    <CardTitle tag="h5">
      {dog.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {dog.sex}
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>

***
import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap"
import { NavLink } from "react-router-dom"

const DogShow = ({ dogs }) => {
  console.log(dogs)
  const { id } = useParams()
    let currentDog = dogs?.find((dog) => {
      return dog.id === +id
    })
  return(
    <main>
      {currentDog && (
          <Card
            style={{
              width: '18rem'
            }}
          >
          <img
            alt={`profile of a dog named ${dog.name}`}
            src={dog.image}
          />
            <CardBody>
              <CardTitle tag="h5">
                {dog.name}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {dog.sex}
              </CardSubtitle>
              <CardText>
                {dog.breed}
                {dog.age}
              </CardText>
              <Button>
                <NavLink to={`/dogshow/${dog.id}`}>
                  Click to view {dog.name}
                </NavLink>
              </Button>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}

export default DogIndex

DogShow.test.js

 PASS  src/__tests__/DogShow.test.js
  <DogShow />
    ✓ renders a name (46 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.34 s, estimated 1 s
Ran all test suites matching /src\/__tests__\/DogShow.test.js/i.

