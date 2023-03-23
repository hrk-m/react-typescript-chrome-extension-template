import React from 'react';
import { render, screen } from '@testing-library/react';

import Popup from './Popup';

it('should load and display Popup', async () => {
  render(<Popup />);

  expect(screen.getByText('どの言語に翻訳しますか？')).toBeInTheDocument();
});
