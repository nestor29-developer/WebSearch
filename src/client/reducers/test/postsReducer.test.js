import postReducer, { initState } from '../posts.Reducer';
import { GET_POSTS_SUCCESS, GET_POSTS_ERROR, UPDATE_POST, UPDATE_PAGE_NUMBER } from '../../actions/types';

describe('Posts Reducer', () => {
  const MOCK_DATA = [
    {
      id: 1,
      userId: 1,
      title: 'sample 1',
      body: 'sample Body 1',
    },
    {
      id: 2,
      userId: 1,
      title: 'sample 2',
      body: 'sample Body 2',
    },
    {
      id: 3,
      userId: 1,
      title: 'sample 3',
      body: 'sample Body 3',
    },
    {
      id: 4,
      userId: 1,
      title: 'sample 4',
      body: 'sample Body 4',
    },
    {
      id: 5,
      userId: 1,
      title: 'sample 5',
      body: 'sample Body 5',
    },
  ];

  const MOCK_DATA_ITEM = {
    id: 3,
    title: 'sample title',
    body: 'sample post',
  };

  it('Should handle an init state', () => {
    expect(postReducer()).toEqual(initState);
  });
  it('Should handle GET_POSTS_ERROR', () => {
    expect(postReducer(initState, {
      type: GET_POSTS_ERROR,
      payload: 'Not Found',
    })).toEqual({
      items: [],
      isLoading: false,
      error: 'Not Found',
      pageNumber: 1,
    });
  });
  it('Should handle GET_POSTS_SUCCESS', () => {
    expect(postReducer(initState, {
      type: GET_POSTS_SUCCESS,
      payload: MOCK_DATA,
    })).toEqual({
      items: MOCK_DATA,
      isLoading: false,
      error: '',
      pageNumber: 1,
    });
  });
  it('Should handle UPDATE_POST', () => {
    expect(postReducer({
      ...initState,
      items: MOCK_DATA,
    }, {
      type: UPDATE_POST,
      payload: MOCK_DATA_ITEM,
    })).toEqual({
      ...initState,
      items: [
        {
          id: 1,
          userId: 1,
          title: 'sample 1',
          body: 'sample Body 1',
        },
        {
          id: 2,
          userId: 1,
          title: 'sample 2',
          body: 'sample Body 2',
        },
        {
          id: 3,
          userId: 1,
          title: 'sample title',
          body: 'sample post',
        },
        {
          id: 4,
          userId: 1,
          title: 'sample 4',
          body: 'sample Body 4',
        },
        {
          id: 5,
          userId: 1,
          title: 'sample 5',
          body: 'sample Body 5',
        },
      ],
    });
  });
  it('Should handle UPDATE_PAGE_NUMBER', () => {
    expect(postReducer(initState, {
      type: UPDATE_PAGE_NUMBER,
      payload: 5,
    })).toEqual({
      items: [],
      isLoading: false,
      error: '',
      pageNumber: 5,
    });
  }); 
});
