import { CALL_API } from 'redux-api-middleware';
import { api } from 'constants/api';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const USER_LOGOUT = 'USER_LOGOUT';

export const fetchUser = data => ({
  [CALL_API]: {
    endpoint: `${api}/auth/login`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    types: [
      FETCH_USER_REQUEST,
      FETCH_USER_SUCCESS,
      FETCH_USER_FAILURE,
    ],
  },
});

export const logout = () => ({ type: USER_LOGOUT });
