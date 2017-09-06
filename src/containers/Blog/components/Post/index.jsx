import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import './style.scss';

class CodeBlock extends Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    window.hljs.highlightBlock(this.code);
  }

  render() {
    const { language, literal } = this.props;
    return (
      <pre>
        <code
          className={language}
          ref={(code) => { this.code = code; }}
        >
          { literal }
        </code>
      </pre>
    );
  }
}

CodeBlock.propTypes = {
  language: PropTypes.string.isRequired,
  literal: PropTypes.string.isRequired,
};

type Props = {
  page: {},
}

const Post = ({ page }: Props) => (
  <div className="post">
    <ReactMarkdown
      source={page.text}
      renderers={{
        ...ReactMarkdown.renderers,
        CodeBlock,
      }}
    />
  </div>
);

export default Post;
