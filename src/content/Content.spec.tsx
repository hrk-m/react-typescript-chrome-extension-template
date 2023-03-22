import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from '../app/store';

import { Content } from './Content';

describe('content', () => {
  test('renders content example', () => {
    const translatedText = 'test';
    const originalText = 'テスト';
    const targetLang = 'EN';

    render(
      <Provider store={store}>
        <Content
          translatedText={translatedText}
          originalText={originalText}
          targetLang={targetLang}
        />
      </Provider>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
