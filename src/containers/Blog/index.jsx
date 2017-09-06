import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { fetchPagesCount, fetchPage } from 'actions/blog';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Post from './components/Post';
import Pagination from './components/Pagination';
import Header from './components/Header';
import './style.scss';

type Props = {
  currentPage: number,
  setCurrentPage: (value: number) => void,
  fetchPage: () => void,
  pageCount: number,
  pages: [],
  token: string,
}

/* eslint-disable no-shadow */
const Blog = ({ currentPage, setCurrentPage, fetchPage, pageCount, pages, token }: Props) => (
  /* eslint-enable no-shadow */
  <div className="blog">
    <Header />
    {/* eslint-disable no-underscore-dangle */}
    { pages.map(page => <Post key={page._id} page={page} />) }
    {/* eslint-enable no-underscore-dangle */}
    <Pagination
      currentPage={currentPage}
      countPage={pageCount}
      setCurrentPage={(newPage) => {
        /* eslint-disable no-nested-ternary */
        fetchPage({ token, page: newPage === -1 ? 0 : newPage === -2 ? pageCount : newPage });
        /* eslint-enable no-nested-ternary */
        setCurrentPage(newPage);
      }}
    />
  </div>
);

const mapStateToProps = state => ({
  token: state.user.token,
  pageCount: state.blog.pageCount,
  pages: state.blog.pages,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPagesCount,
  fetchPage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(compose(
  withStateHandlers(
    { currentPage: 0 },
    {
      /* eslint-disable no-nested-ternary */
      setCurrentPage: ({ pageCount }) => value => ({
        currentPage: value === -1 ? 0 : value === -2 ? pageCount : value,
      }),
      /* eslint-enable no-nested-ternary */
    },
  ),
  lifecycle({
    /* eslint-disable no-shadow */
    componentWillMount() {
      this.props.fetchPagesCount({ token: this.props.token });
      this.props.fetchPage({ token: this.props.token, page: 0 });
    },
    /* eslint-enable no-shadow */
  }),
)(Blog));
