import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import DogIndex from '../pages/DogIndex';
import mockDogs from '../mockDogs'

describe('<DogIndex />', () => {
  it('has a heading', () => {
    render(
      <BrowserRouter>
        <DogIndex dogs={mockDogs}/>
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    mockDogs.forEach((dog) => {
      const altText = screen.getAllByAltText(/profile of/i)
      screen.debug(altText[0])
      expect(altText[0]).toBeInTheDocument()
    })
  })

})

