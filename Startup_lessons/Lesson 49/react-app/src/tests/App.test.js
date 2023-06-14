import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('TEST APP', () => {
  test('Menu link - Main', async () => {
    render(<App />);
    const user = userEvent.setup();
    const mainLink = screen.getByRole('link', { name: /Main/i });
    await user.click(mainLink);
    expect(screen.getByText(/We have a lot of posts/i)).toBeInTheDocument();
  });

  test('Menu link - Posts', async () => {
    render(<App />);
    const user = userEvent.setup();
    const postsLink = screen.getByRole('link', { name: /Posts/i });
    await user.click(postsLink);
    expect(screen.getByText(/View our posts/i)).toBeInTheDocument();
  });

  test('Menu link - Login', async () => {
    render(<App />);
    const user = userEvent.setup();
    const loginLink = screen.getByRole('link', { name: /Login/i });
    await user.click(loginLink);
    expect(screen.getByText(/Subscribe to our updates/i)).toBeInTheDocument();
  });
});
