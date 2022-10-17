import { render, screen } from '@testing-library/react';
import { Finder } from '.';
import { Dictionary } from '../../constants/Dictionary';
import ApplicationProvider from '../../providers/ApplicationProvider';

describe('Finder page', () => {
  beforeEach(() => {
    render(
      <ApplicationProvider>
        <Finder />
      </ApplicationProvider>,
    );
  });

  it('should render welcome header', () => {
    const welcomeHeader = screen.getByTestId('finder_greetings_header');

    expect(welcomeHeader).toBeInTheDocument();
  });

  it('should render search input', () => {
    const searchInput = screen.getByTestId('search_input');

    expect(searchInput).toBeInTheDocument();
    expect(searchInput.innerHTML).toEqual('');
  });

  it('should render sign out button', () => {
    const signoutButton = screen.getByTestId('signout_button');

    expect(signoutButton).toBeInTheDocument();
    expect(signoutButton.innerHTML).toEqual(Dictionary.SignOutButton);
  });
});
