import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, apiMiddleware),
    autoRehydrate(),
  ),
);

persistStore(store, { blacklist: ['status', 'form'] });

export default store;
