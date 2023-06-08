import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
      div
    )
  })
  it("renders an image with a src and alt", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
      div
    )
    const dogImage = screen.getByRole("img")
    expect(dogImage).toHaveAttribute("src", "https://live.staticflickr.com/46/127977447_3aff7684d6_b.jpg")
    expect(dogImage).toHaveAttribute("alt", "Dog with his head in the ground")
  })
})