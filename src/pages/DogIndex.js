import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap"
import { NavLink } from "react-router-dom"

const DogIndex = ({ dogs }) => {
  console.log(dogs)
  return(
    <main id="dog-index-card">
      {dogs?.map((dog, index) => {
        return (
          <Card
            style={{
              width: '18rem',
              height: '30rem'
            }}
            key={index}
          >
          <img
            className="dog-image"
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
              <Button id="card-button">
                <NavLink to={`/dogshow/${dog.id}`} id="nav-link">
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