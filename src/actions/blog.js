import { CALL_API } from 'redux-api-middleware';
import { api } from 'constants/api';

export const FETCH_PAGES_COUNT_REQUEST = 'FETCH_PAGES_COUNT_REQUEST';
export const FETCH_PAGES_COUNT_SUCCESS = 'FETCH_PAGES_COUNT_SUCCESS';
export const FETCH_PAGES_COUNT_FAILURE = 'FETCH_PAGES_COUNT_FAILURE';

export const FETCH_PAGE_REQUEST = 'FETCH_PAGE_REQUEST';
export const FETCH_PAGE_SUCCESS = 'FETCH_PAGE_SUCCESS';
export const FETCH_PAGE_FAILURE = 'FETCH_PAGE_FAILURE';

export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const fetchPagesCount = ({ token }) => ({
  [CALL_API]: {
    endpoint: `${api}/blog/count`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    types: [
      FETCH_PAGES_COUNT_REQUEST,
      FETCH_PAGES_COUNT_SUCCESS,
      FETCH_PAGES_COUNT_FAILURE,
    ],
  },
});

export const fetchPage = ({ token, page }) => ({
  [CALL_API]: {
    endpoint: `${api}/blog/?skip=${page * 10}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    types: [
      FETCH_PAGE_REQUEST,
      FETCH_PAGE_SUCCESS,
      FETCH_PAGE_FAILURE,
    ],
  },
});

export const createPost = ({ token, text }) => ({
  [CALL_API]: {
    endpoint: `${api}/blog/`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ text }),
    types: [
      CREATE_POST_REQUEST,
      CREATE_POST_SUCCESS,
      CREATE_POST_FAILURE,
    ],
  },
});
