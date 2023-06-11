import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import DogNew from '../pages/DogNew';

describe('<DogNew />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <DogNew />
      </BrowserRouter>
    )
  })
  it("renders the DogNew page", () => {
    const element = screen.getByText(/dog new/i)
    expect(element).toBeInTheDocument()
  })

})
