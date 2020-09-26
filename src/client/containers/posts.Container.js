import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as postsActions from '../actions/posts.Action';
import * as editMenuFormActions from '../actions/editMenuForm.Action';
import * as headActions from '../actions/head.Action';
import PostItemComponent from '../components/postItem.component';
import FormMainComponent from '../components/formMain.component';
import ViewWrapperComponent from '../components/viewWrapper.component';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  spacedPagination: {
    margin: '3rem auto',
  },
});
class PostsContainer extends Component {
  componentDidMount() {
    const {
      getPosts,
      updatePageNumber,
      match: { params: { pageNumber } },
    } = this.props;
    updatePageNumber(Number(pageNumber) || 1);
    getPosts();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { pageNumber: prevPageNumber } } } = prevProps;
    const {
      updatePageNumber,
      isSearchShown,
      toggleSearch,
      match: { params: { pageNumber } },
    } = this.props;
    if (pageNumber !== prevPageNumber) {
      updatePageNumber(Number(pageNumber) || 1);
    }
    if (!isSearchShown) {
      toggleSearch({ isSearchShown: true });
    }
  }

  filterPosts = (pageNumber, postsPerPage = 10) => {
    const { posts: { items = [] }, searchInputText } = this.props;
    const start = (pageNumber - 1) * postsPerPage;
    const end = start + postsPerPage;
    if (searchInputText) {
      return items.filter((item) => item.title.includes(searchInputText));
    }
    return items.slice(start, end);
  }

  render() {
    const {
      editDialog,
      hideDialog,
      updatePost,
      editForm,
      posts,
      searchInputText,
      classes,
    } = this.props;
    const { pageNumber = 1 } = posts;
    return (
      <main>
        <ViewWrapperComponent
          isLoading={posts.isLoading}
          loader={(<CircularProgress />)}
          error={posts.error}
        >
          <PostItemComponent
            items={this.filterPosts(pageNumber)}
            editDialog={(e) => editDialog(e)}
            searchInputText={searchInputText}
          />
        </ViewWrapperComponent>
        <FormMainComponent
          editForm={editForm}
          hideDialog={(e) => hideDialog(e)}
          updatePost={(e) => updatePost(e)}
        />
        {!searchInputText
          && posts.items.length
          ? (
            <Grid container justify="center">
              <Pagination
                className={classes.spacedPagination}
                page={Number(pageNumber)}
                count={10}
                color="primary"
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={`/${item.page === 1 ? '' : `${item.page}`}`}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...item}
                  />
                )}
              />
            </Grid>
          ) : ''}
      </main>
    );
  }
}

PostsContainer.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  getPosts: PropTypes.func.isRequired,
  updatePageNumber: PropTypes.func.isRequired,
  editDialog: PropTypes.func.isRequired,
  hideDialog: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  toggleSearch: PropTypes.func.isRequired,
  editForm: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object),
  posts: PropTypes.shape({
    isLoading: PropTypes.bool,
    pageNumber: PropTypes.number,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string,
        userId: PropTypes.number,
      }),
    ),
    error: PropTypes.string,
  }),
  isSearchShown: PropTypes.bool.isRequired,
  searchInputText: PropTypes.string,
};

PostsContainer.defaultProps = {
  posts: {
    items: [],
    error: '',
    isLoading: false,
    pageNumber: 1  
  },
  editForm: {
    title: '',
    body: '',
    id: 0,
    userId: 0   
  },
  match: {
    params: {
      pageNumber: '1',
    },
  },
  searchInputText: '',
};

const mapStateToProps = ({ posts, editForm, header }) => ({
  posts,
  editForm,
  searchInputText: header.searchInputText,
  isSearchShown: header.isSearchShown,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPosts: postsActions.getPosts,
  updatePost: postsActions.updatePost,
  showDialog: editMenuFormActions.showDialog,
  hideDialog: editMenuFormActions.hideDialog,
  editDialog: editMenuFormActions.editDialog,
  updatePageNumber: postsActions.updatePageNumber,
  toggleSearch: headActions.toggleSearch,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(withStyles(styles)(PostsContainer)));
