import React from 'react';
import { render } from '@testing-library/react';
import ViewWrapperComponent from '../viewWrapper.component';
import TestProvider from '../../utils/TestProvider';

describe('<ViewWrapperComponent />', () => {
  it('Renders successfully without any kind of error', () => {
    const component = render(
      <TestProvider>
        <ViewWrapperComponent isLoading={false}>
          <div>Whatever Text</div>
        </ViewWrapperComponent>
      </TestProvider>,
    );
    expect(component.container).toBeTruthy();
  }); 
});
