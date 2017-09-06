// @flow
import React from 'react';
// $FlowFixMe
import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUser } from 'actions/auth';
import { createUser } from 'actions/user';
import SigninForm from './components/forms/signin';
import SignupForm from './components/forms/signup';
// $FlowFixMe
import './style.scss';

type Props = {
  selectSignIn: () => void,
  selectSignUp: () => void,
  fetchUser: () => void,
  createUser: () => void,
  error: boolean,
  active: string,
}
/* eslint-disable no-shadow */
const Auth = ({ selectSignIn, selectSignUp, active, fetchUser, error, createUser }: Props) => (
  /* eslint-enable no-shadow */
  <div className="signin-wrapper">
    <div className="container">
      <div className="pageSelector">
        <div
          className={`select ${active === 'signin' ? 'active' : 'unactive'}`}
          role="button"
          tabIndex={0}
          onClick={() => selectSignIn()}
        > sign in </div>
        <div
          className={`select ${active === 'signup' ? 'active' : 'unactive'}`}
          role="button"
          tabIndex={0}
          onClick={() => selectSignUp()}
        > sign up</div>
      </div>
      { active === 'signin'
        ? <SigninForm handleSubmit={data => fetchUser(data)} />
        : <SignupForm handleSubmit={data => createUser(data)} />}
      { error ? <div className="error">Check your login details</div> : null}
    </div>
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser,
  createUser,
}, dispatch);

export default compose(
  connect(state => ({ error: state.user.error }), mapDispatchToProps),
  withStateHandlers(
    ({ initial = 'signin' }) => ({
      active: initial,
    }),
    {
      selectSignIn: () => () => ({
        active: 'signin',
      }),
      selectSignUp: () => () => ({
        active: 'signup',
      }),
    },
  ),
)(Auth);
