import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const DogEdit = ({ dog, handleUpdateDog }) => {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(dog.name)
  const [age, setAge] = useState(dog.age)
  const [breed, setBreed] = useState(dog.breed)
  const [sex, setSex] = useState(dog.sex)
  const [image, setImage] = useState(dog.image)
  const [updated, setUpdated] = useState(false)
  const navigate = useNavigate()

  const updateDog = () => {
    const updatedDog = {
      name: name,
      age: age,
      breed: breed,
      sex: sex,
      image: image,
    };
    handleUpdateDog(dog.id, updatedDog)
    setUpdated(true)
  };

  const resetForm = () => {
    setEditing(false)
    setUpdated(false)
    setName(dog.name)
    setAge(dog.age)
    setBreed(dog.breed)
    setSex(dog.sex)
    setImage(dog.image)
  }

  return (
    <div>
      {/* <h1>Dog Details</h1>
      <p>Name: {dog.name}</p>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
      <p>Sex: {dog.sex}</p>
      <p>Image: {dog.image}</p> */}

      {editing && !updated ? (
        <div>
          <h2>Edit {dog.name}</h2>
          <form>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Age:</label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            <label>Breed:</label>
            <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
            <label>Sex:</label>
            <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} />
            <label>Image:</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
            <button type="button" onClick={updateDog}>Update</button>
          </form>
        </div>
      ) : (
        <>
          {!updated && (
            <button onClick={() => setEditing(true)}>Edit</button>
          )}
          {updated && (
            <p>Dog updated successfully!</p>
          )}
        </>
      )}
    </div>
  )
}

export default DogEdit