import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE, USER_LOGOUT } from 'actions/auth';
import { CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from 'actions/user';

export default (state = { username: '', token: null, error: null, isAdmin: null }, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER_SUCCESS:
      return ({
        ...state,
        username: payload.username,
        token: payload.token,
        isAdmin: payload.isAdmin,
        error: false });
    case FETCH_USER_FAILURE:
      return ({ ...state, error: true });
    case USER_LOGOUT:
      return ({ ...state, token: null, username: '', error: null, isAdmin: null });
    case CREATE_USER_SUCCESS:
      return ({
        ...state,
        username: payload.username,
        token: payload.token,
        isAdmin: payload.isAdmin,
        error: false,
      });
    default:
      return state;
  }
};
