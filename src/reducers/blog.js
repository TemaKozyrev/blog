import {
  FETCH_PAGES_COUNT_SUCCESS,
  FETCH_PAGES_COUNT_FAILURE,
  FETCH_PAGE_SUCCESS,
  FETCH_PAGE_FAILURE,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from 'actions/blog';

export default (state = { pages: [], pageCount: 0 }, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PAGES_COUNT_SUCCESS:
      return ({ ...state, pageCount: Math.floor(payload / 10) });
    case FETCH_PAGES_COUNT_FAILURE:
      return ({ ...state });
    case FETCH_PAGE_SUCCESS:
      return ({ ...state, pages: [...payload] });
    case FETCH_PAGE_FAILURE:
      return ({ ...state });
    case CREATE_POST_SUCCESS:
      return state;
    case CREATE_POST_FAILURE:
      return state;
    default:
      return state;
  }
};
