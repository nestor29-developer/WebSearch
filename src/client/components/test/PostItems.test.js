import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import PostItemComponent from '../postItem.component';
import TestProvider from '../../utils/TestProvider';

const MOCK_DATA = [
  {
    id: 1,
    userId: 1,
    title: 'sample 1',
    body: 'fake Body 1',
  },
  {
    id: 2,
    userId: 1,
    title: 'sample 2',
    body: 'fake Body 2',
  },
  {
    id: 3,
    userId: 1,
    title: 'sample 3',
    body: 'fake Body 3',
  },
  {
    id: 4,
    userId: 2,
    title: 'sample 4',
    body: 'fake Body 4',
  },
  {
    id: 5,
    userId: 2,
    title: 'sample 5',
    body: 'fake Body 5',
  },
  {
    id: 6,
    userId: 3,
    title: 'sample 6',
    body: 'fake Body 6',
  },
];

describe('<PostItemComponent />', () => {
  it('Renders successfully without any error', () => {
    const component = render(
      <TestProvider>
        <PostItemComponent items={[]} editDialog={(e) => jest.fn(e)} />
      </TestProvider>,
    );
    expect(component.container).toBeTruthy();
  });
  // it('Renders successfully without error with Items', async () => {
  //   const { getByText } = render(
  //     <TestProvider>
  //       <PostItemComponent items={MOCK_DATA} editDialog={(e) => jest.fn(e)} />
  //     </TestProvider>,
  //   );
  //   const result = await waitForElement(() => getByText('fake Body 3'));
  //   expect(result).toBeTruthy();
  // });
  // it('Renders with no results of search', async () => {
  //   const { getByText } = render(
  //     <TestProvider>
  //       <PostItemComponent items={[]} searchInputText="Some Text" editDialog={(e) => jest.fn(e)} />
  //     </TestProvider>,
  //   );
  //   const result = await waitForElement(() => getByText('No Results Found'));
  //   expect(result).toBeTruthy();
  // });
  // it('Renders with no results of empty array', async () => {
  //   const { getByText } = render(
  //     <TestProvider>
  //       <PostItemComponent items={[]} searchInputText="" editDialog={(e) => jest.fn(e)} />
  //     </TestProvider>,
  //   );
  //   const result = await waitForElement(() => getByText('You do not have any posts'));
  //   expect(result).toBeTruthy();
  // });
  // it('Renders with no results of empty array', async () => {
  //   const mockEditDialog = jest.fn();
  //   const { getAllByText } = render(
  //     <TestProvider>
  //       <PostItemComponent items={MOCK_DATA} searchInputText="" editDialog={mockEditDialog} />
  //     </TestProvider>,
  //   );
  //   const editButtons = await waitForElement(() => getAllByText('Edit'));
  //   fireEvent.click(editButtons[0]);
  //   expect(mockEditDialog).toHaveBeenCalledTimes(1);
  // });
});
