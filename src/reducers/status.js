import { REHYDRATE } from 'redux-persist/constants';

export default (state = { loading: true }, action = {}) => {
  const { type } = action;
  switch (type) {
    case REHYDRATE:
      return ({
        ...state,
        loading: false });
    default:
      return state;
  }
};
