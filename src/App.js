import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import DogEdit from "./pages/DogEdit"
import DogIndex from "./pages/DogIndex"
import DogNew from "./pages/DogNew"
import DogShow from "./pages/DogShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"

const App = () => {
  const [dogs, setDogs] = useState([])
  console.log(dogs)

  useEffect(() => {
    readDog()
  }, [])
  const readDog = () => {
   fetch("http://localhost:3000/dogs")
     .then((response) => response.json())
     .then((payload) => {
      setDogs(payload)
    })
     .catch(error => console.log(error))
  }

  const createDog = (createdDog) => {
    fetch("http://localhost:3000/dog", {
      body: JSON.stringify(createdDog),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readDog())
      .catch((errors) => console.log("Dog create errors:", errors))
   }
  return(
    <>
      <Header />
      <h1 className="header"></h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogindex" element={<DogIndex dogs={dogs} />} />
        <Route path="/dogshow/:id" element={<DogShow dogs={dogs} />} />
        <Route path="/dognew" element={<DogNew createDog={createDog} />} />
        <Route path="/dogedit" element={<DogEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App

