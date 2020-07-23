import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';

import Home from '../../pages/Home';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('</Home>', () => {
  it('should be able to render home page', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Análise de Sentimento')).toBeTruthy();
  });

  it('should be able to change text', () => {
    const { getByTestId } = render(<Home />);

    const user = 'wallyson';

    const input = getByTestId('input');
    fireEvent.changeText(input, user);

    expect(input.props.value).toBe(user);
  });

  it('should be able to navigate to list page', async () => {
    const { getByTestId } = render(<Home />);

    await act(async () => {
      fireEvent.press(getByTestId('searchButton'));
    });

    expect(getByTestId('searchButton')).toBeTruthy();

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});
