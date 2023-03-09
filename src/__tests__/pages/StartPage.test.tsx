import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StartPage from '../../pages/StartPage/StartPage';

describe('StartPage', () => {
  it('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <StartPage />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
