import { CALL_API } from 'redux-api-middleware';
import { api } from 'constants/api';

export const SEND_INVITE_REQUEST = 'SEND_INVITE_REQUEST';
export const SEND_INVITE_SUCCESS = 'SEND_INVITE_SUCCESS';
export const SEND_INVITE_FAILURE = 'SEND_INVITE_FAILURE';

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const sendInvite = ({ email, token }) => ({
  [CALL_API]: {
    endpoint: `${api}/token`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email }),
    types: [
      SEND_INVITE_REQUEST,
      SEND_INVITE_SUCCESS,
      SEND_INVITE_FAILURE,
    ],
  },
});

export const createUser = ({ username, password, token }) => ({
  [CALL_API]: {
    endpoint: `${api}/users`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, token }),
    types: [
      CREATE_USER_REQUEST,
      CREATE_USER_SUCCESS,
      CREATE_USER_FAILURE,
    ],
  },
});
