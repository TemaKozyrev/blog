import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import './style.scss';

type Props = {
  handleSubmit: () => void,
  username: string,
  password: string,
  token: string,
}

const SignupForm = ({ username, password, token, handleSubmit }: Props) => (
  <form className="auth-form signup" onSubmit={handleSubmit}>
    <Field
      name="username"
      component="input"
      type="text"
      placeholder="username"
      className="input"
    />
    <Field
      name="password"
      component="input"
      type="password"
      placeholder="password"
      className="input"
    />
    <Field
      name="token"
      component="input"
      type="text"
      placeholder="token"
      className="input"
    />
    <button
      type="submit"
      className="button"
      onClick={(e) => {
        e.preventDefault();
        handleSubmit({ username, password, token });
      }}
    >
      submit
    </button>
  </form>
);


const selector = formValueSelector('signup');
export default connect(
  state => ({
    ...selector(state, 'username', 'password', 'token'),
  }),
)(reduxForm({ form: 'signup' })(SignupForm));
