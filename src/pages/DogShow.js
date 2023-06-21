import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import DogEdit from "./DogEdit"

const DogShow = ({ dogs, handleUpdateDog }) => {
  const { id } = useParams()
  let currentDog = dogs?.find((dog) => dog.id === +id)

  return (
    <main id="dog-index-card">
      {currentDog && (
        <Card style={{ width: '18rem' }}>
          <img alt={`profile of a dog named ${currentDog.name}`} src={currentDog.image} />
          <CardBody>
            <CardTitle tag="h5" alt={currentDog.name}>
              {currentDog.name}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Sex: {currentDog.sex} | Age: {currentDog.age}
            </CardSubtitle>
            <CardText>{currentDog.breed}</CardText>
            <CardText>
              <DogEdit dog={currentDog} handleUpdateDog={handleUpdateDog} />
            </CardText>
          </CardBody>
        </Card>
      )}
    </main>
  )
}

export default DogShow
