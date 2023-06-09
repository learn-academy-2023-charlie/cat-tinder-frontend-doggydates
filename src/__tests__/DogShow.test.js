import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import DogShow from '../pages/DogShow'
import mockDogs from '../mockDogs'

describe('<DogShow />', () => {
  it('renders a name', () => {
    render(
      <MemoryRouter initialEntries={["/dogshow/1"]}>
        <Routes>
         <Route path="/dogshow/:id" element={<DogShow dogs={mockDogs}/>}/>
        </Routes>
      </MemoryRouter>
    )
    mockDogs.forEach((dog) => {
      const dogName = screen.getByRole("heading", {
        name: /spike/i
      })
      expect(screen.getByText(/spike/i)).toBeInTheDocument("Spike")
    })
  })
})

