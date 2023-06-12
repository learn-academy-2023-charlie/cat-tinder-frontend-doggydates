import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap"
import { NavLink } from "react-router-dom"
import {useParams} from "react-router-dom"

const DogShow = ({ dogs }) => {
  console.log(dogs)
  const { id } = useParams()
    let currentDog = dogs?.find((dog) => {
      return dog.id === +id
    })
    console.log(currentDog)
  return(
    <main id="dog-index-card">
      {currentDog && (
          <Card
            style={{
              width: '18rem'
            }}
          >
          <img
            alt={`profile of a dog named ${currentDog.name}`}
            src={currentDog.image}
          />
            <CardBody>
              <CardTitle tag="h5" alt={currentDog.name}>
                {currentDog.name} 
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Sex: {currentDog.sex} | Age: {currentDog.age}
              </CardSubtitle>
              <CardText>
                {currentDog.breed}
              </CardText>
            </CardBody>
          </Card>
        )
          }
    </main>
  )
}

export default DogShow