import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';

import Header from '@/components/Header';

const renderWithoutRedux = () => {

  render(<Header />);
};

describe('Header Component', () => {

  it('should has input value empty', async () => {
    renderWithoutRedux();

    const header = screen.getByTestId('header');
    const inputBar = screen.getByTestId('input-bar');

    expect(header).toBeTruthy();
    expect(inputBar).toHaveValue('');
  });

  it('should has input with value', async () => {
    renderWithoutRedux();

    const header = screen.getByTestId('header');
    const inputBar = screen.getByTestId('input-bar');

    fireEvent.change(inputBar, { target: { value: 'Apple Ipod'}})

    expect(header).toBeTruthy();
    expect(inputBar).toHaveValue('Apple Ipod');
  });

   it('should show Header correctly', () => {
    renderWithoutRedux();

    const header = screen.getByTestId('header');
    const inputBar = screen.getByTestId('input-bar');
    const image = screen.getByAltText('logo_meli');
    const button = screen.getByAltText('button_search');
    
    
    expect(header).toBeTruthy();
    expect(inputBar).toBeTruthy();
    expect(inputBar).toHaveValue('');
    expect(image).toBeTruthy();
    expect(button).toBeTruthy();
  });

});
