
import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from 'store';

import Auth from './Auth';
import Blog from './Blog';
import CreatePost from './CreatePost';

import './style.scss';

export default () => (
  <Provider store={store}>
    <Loading>
      <BrowserRouter>
        <div className="container">
          <PrivateRoute exact path="/" component={Blog} />
          <AdminRoute path="/create" component={CreatePost} />
          <AuthRoute path="/auth" component={Auth} />
        </div>
      </BrowserRouter>
    </Loading>
  </Provider>
);

type RouteProps = {
  location: string,
  component: React.Node
}

const Loading = connect(
  state => ({ loading: state.status.loading, token: state.user.token }),
)(
  /* eslint-disable no-confusing-arrow */
  ({ loading, children }) => loading ? (<div />) : children,
  /* eslint-enable no-confusing-arrow */
);

const PrivateRoute = ({ component: Component, ...rest }: RouteProps) => (
  <Route
    {...rest}
    render={props => (
      store.getState().user.token ? (<Component {...props} />) : (
        <Redirect to={{
          pathname: '/auth',
          state: {
            from: props.location,
          },
        }}
        />
      )
    )}
  />
);

const AdminRoute = ({ component: Component, ...rest }: RouteProps) => (
  <Route
    {...rest}
    render={props => (
      store.getState().user.isAdmin ? (<Component {...props} />) : (
        <Redirect to={{
          pathname: '/',
          state: {
            from: props.location,
          },
        }}
        />
      )
    )}
  />
);

const AuthRoute = ({ component: Component, ...rest }: RouteProps) => (
  <Route
    {...rest}
    render={props => (
      !store.getState().user.token ? (<Component {...props} />) : (
        <Redirect to={{
          pathname: '/',
          state: {
            from: props.location,
          },
        }}
        />
      )
    )}
  />
);
