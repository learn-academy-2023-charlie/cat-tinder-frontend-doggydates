import React, {useState} from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import mockDogs from "./mockDogs"
import DogEdit from "./pages/DogEdit"
import DogIndex from "./pages/DogIndex"
import DogNew from "./pages/DogNew"
import DogShow from "./pages/DogShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"

const App = () => {
  const [dogs, setDogs] = useState(mockDogs)
  console.log(dogs)

  const createDog = (createdDog) => {
    console.log("my created dog", createdDog)
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

