import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap"
import { NavLink } from "react-router-dom"

const DogIndex = ({ dogs }) => {
  console.log(dogs)
  return(
    <main>
      {dogs.map((dog, index) => {
        return (
          <>
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
      <NavLink to={`/dogshow/${dog.id}`}>
        Click to view {dog.name}
      </NavLink>
    </Button>
  </CardBody>
</Card>
          </>
        )
      })}
    </main>
  )
}

export default DogIndex