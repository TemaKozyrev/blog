import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { createPost } from 'actions/blog';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import CodeMirror from 'react-codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';

import './style.scss';

type Props = {
  editorState: any,
  token: string,
  onChange: () => void,
  createPost: () => void,
}

/* eslint-disable no-shadow */
const CreatePost = ({ editorState, onChange, createPost, token }: Props) => (
  /* eslint-enable no-shadow */
  <div className="editor">
    <CodeMirror
      value={editorState}
      onChange={onChange}
      autoFocus
      options={{
        readOnly: false,
        mode: 'markdown',
      }}
    />
    <div className="actions">
      <div className="button"><Link to="/">Back</Link></div>
      <div
        role="button"
        tabIndex={0}
        className="button"
        onClick={() => {
          createPost({ token, text: editorState });
        }}
      ><Link to="/">Create</Link></div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  token: state.user.token,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  createPost,
}, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(
    {
      editorState: '// Code',
    },
    {
      onChange: () => editorState => ({
        editorState,
      }),
    },
  ),
)(CreatePost);
