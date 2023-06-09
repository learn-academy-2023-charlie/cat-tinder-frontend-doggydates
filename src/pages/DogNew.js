import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap"
import { useNavigate } from "react-router-dom"

const DogNew = ({createDog}) => {
  const [newDog, setNewDog] = useState(
    {
      name: "",
      age: "",
      breed: "",
      sex: "",
      image: ""
    }
  )

  const navigate = useNavigate()

  const handleChange = (e) => {
    // displaying the changes from my user interaction
    // e.target.name will be telling us which key we are updating
    // e.target.value will telling us what value it will push into that key
    setNewDog({ ...newDog, [e.target.name]: e.target.value })
  }

  const handleClick = () => {
    createDog(newDog)
    navigate("/dogindex")
  }
  return(
    <>
       <h1>Dog New</h1>
      <Form>
        <FormGroup row>
          <Label
            for="dog-name"
          >
            Enter Dog Name
          </Label>
          <Col sm={10}>
            <Input
              id="dog-name"
              name="name"
              placeholder="Dog Name"
              type="text"
              onChange={handleChange} 
              value={newDog.name}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label
            for="dog-age"
          >
            Enter Dog Age
          </Label>
          <Col sm={10}>
            <Input
              id="dog-age"
              name="age"
              placeholder="Dog Age"
              type="text"
              onChange={handleChange} 
              value={newDog.age}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label
            for="dog-breed"
          >
            Enter Dog Breed
          </Label>
          <Col sm={10}>
            <Input
              id="dog-breed"
              name="breed"
              placeholder="Dog breed"
              type="text"
              onChange={handleChange} 
              value={newDog.breed}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label
            for="dog-sex"
          >
            Enter Dog Sex
          </Label>
          <Col sm={10}>
            <Input
              id="dog-sex"
              name="sex"
              placeholder="Dog sex"
              type="text"
              onChange={handleChange} 
              value={newDog.sex}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label
            for="dog-image"
          >
            Enter Dog Image
          </Label>
          <Col sm={10}>
            <Input
              id="dog-image"
              name="image"
              placeholder="Dog image"
              type="text"
              onChange={handleChange} 
              value={newDog.image}
            />
          </Col>
        </FormGroup>
        <Button onClick={handleClick} name="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default DogNew