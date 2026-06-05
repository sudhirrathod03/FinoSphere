import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Team from './Team.jsx';

describe('Team Component', () => {
  test('renders the heading', () => {
    render(<Team />);
    const heading = screen.getByText(/People/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders Nithin Kamath name', () => {
    render(<Team />);
    const name = screen.getByText(/Nithin Kamath/i);
    expect(name).toBeInTheDocument();
  });

  test('renders role as Founder, CEO', () => {
    render(<Team />);
    const role = screen.getByText(/Founder, CEO/i);
    expect(role).toBeInTheDocument();
  });

  test('renders CEO image', () => {
    render(<Team />);
    const image = screen.getByAltText(/Nithin Kamath/i);
    expect(image).toBeInTheDocument();
  });
});
