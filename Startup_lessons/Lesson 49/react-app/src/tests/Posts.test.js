import { render, screen } from '@testing-library/react';
import Posts from "../components/Posts.js";

test('Posts has title', () => {
  render(<Posts />);
  const titleElement = screen.getByRole('heading', { name: /Posts/i });
  expect(titleElement).toBeInTheDocument();
});