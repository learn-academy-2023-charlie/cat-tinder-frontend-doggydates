import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Footer from "../components/Footer"

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div
    )
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Doggy Dates"))
    expect(screen.getByText("Doggy Dates")).toBeInTheDocument()
  })
})