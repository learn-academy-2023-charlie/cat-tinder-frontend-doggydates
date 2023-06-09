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
    mockDogs.forEach((dog) => {
      const altText = screen.getByRole('img')
      screen.debug(altText[0])
      expect(altText[0]).toBeInTheDocument()
    })
  })

})