import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import './style.scss';

type Props = {
  handleSubmit: () => void,
  username: string,
  password: string,
}

const SigninForm = ({ handleSubmit, username, password }: Props) => (
  <form className="auth-form signin" onSubmit={handleSubmit}>
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
    <button
      type="submit"
      value="Submit"
      className="button"
      onClick={(e) => {
        e.preventDefault();
        handleSubmit({ username, password });
      }}
    >
      submit
    </button>
  </form>
);

const selector = formValueSelector('signin');
export default connect(
  state => ({
    ...selector(state, 'username', 'password'),
  }),
)(reduxForm({ form: 'signin' })(SigninForm));
