import React from 'react';
import { render } from '@testing-library/react';
import Header from '../header.component';
import TestProvider from '../../utils/TestProvider';

describe('<HeaderComponent />', () => {
  it('Renders successfully without any error', () => {
    const component = render(
      <TestProvider>
        <Header itemsList={[]} title="My Online Posts" />
      </TestProvider>,
    );
    expect(component.container).toBeTruthy();
  });
});
