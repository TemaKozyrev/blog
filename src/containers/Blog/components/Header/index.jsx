import React from 'react';
import { logout } from 'actions/auth';
import { sendInvite } from 'actions/user';
import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';
import { Link } from 'react-router-dom';
import './style.scss';

type Props = {
  logout: () => void,
  sendInvite: () => void,
  isShowingModal: boolean,
  email: string,
  isAdmin: boolean,
  token: string,
  closeModal: () => void,
  openModal: () => void,
  setEmail: (value: string) => void,
}

/* eslint-disable no-shadow */
const Header = (
  {
    logout,
    sendInvite,
    isShowingModal,
    closeModal,
    openModal,
    email,
    setEmail,
    token,
    isAdmin,
  }: Props) => (
  /* eslint-enable no-shadow */
  /* eslint-disable react/jsx-indent */
  <div className="header">
    {/* eslint-enable react/jsx-indent */}
    <div className="title">Tema Kozyrev</div>
    <div className="actions">
      {isAdmin && <div
        role="button"
        tabIndex={0}
        className="button"
        onClick={openModal}
      >Invite</div>}
      {isAdmin && <div className="button"><Link to="/create">Create post</Link></div>}
      <div
        role="button"
        tabIndex={0}
        className="button"
        onClick={logout}
      >Logout</div>
    </div>
    {
      isShowingModal &&
      <ModalContainer onClose={closeModal}>
        <ModalDialog onClose={closeModal}>
          <h1>Enter email</h1>
          <input className="email-input" type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <div
            role="button"
            tabIndex={0}
            className="modal-button"
            onClick={() => {
              sendInvite({ email, token });
              closeModal();
            }}
          >Send</div>
        </ModalDialog>
      </ModalContainer>
    }
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
  sendInvite,
}, dispatch);

export default compose(
  connect(state => ({ token: state.user.token, isAdmin: state.user.isAdmin }), mapDispatchToProps),
  withStateHandlers(
    {
      isShowingModal: false,
      email: '',
    },
    {
      closeModal: () => () => ({
        isShowingModal: false,
      }),
      openModal: () => () => ({
        isShowingModal: true,
      }),
      setEmail: () => value => ({
        email: value,
      }),
    },
  ),
)(Header);
