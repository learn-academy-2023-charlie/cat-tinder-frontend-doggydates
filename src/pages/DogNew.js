import React from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const DogNew = () => {
  const [newDog, setNewDog] = useState 
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

      </Form>
    </>
  )
}

export default DogNew