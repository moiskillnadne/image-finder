import { render, screen } from '@testing-library/react';
import React from 'react';
import { AuthenticationPage } from '.';
import { Dictionary } from '../../constants/Dictionary';
import ApplicationProvider from '../../providers/ApplicationProvider';

describe('Authentication page', () => {
  beforeEach(() => {
    render(
      <ApplicationProvider>
        <AuthenticationPage />
      </ApplicationProvider>,
    );
  });

  it('should render first header', () => {
    const firstHeader = screen.getByTestId('first_header');

    expect(firstHeader).toBeInTheDocument();
  });

  it('should render correct text value - "first_header"', () => {
    const firstHeader = screen.getByTestId('first_header');

    expect(firstHeader.innerHTML).toEqual(Dictionary.GreetingHeader);
  });

  it('should render second header', () => {
    const secondHeader = screen.getByTestId('second_header');

    expect(secondHeader).toBeInTheDocument();
  });

  it('should render correct text value - "second_header"', () => {
    const firstHeader = screen.getByTestId('second_header');

    expect(firstHeader.innerHTML).toEqual(Dictionary.TellYourNameHeader);
  });
});
