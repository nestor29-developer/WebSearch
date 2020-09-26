import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as headActions from '../actions/head.Action';
import * as itemActions from '../actions/item.Action';
import ViewWrapperComponent from '../components/viewWrapper.component';

const styles = () => ({
  centeredHeader: {
    paddingBottom: '2rem',
    textAlign: 'center'
  },
});
class ItemContainer extends Component {
  componentDidMount() {
    const {
      getItem,
      toggleSearch,
      match: { params: { postId } },
    } = this.props;

    getItem(postId);
    toggleSearch({ isSearchShown: false });
  }

  render() {
    const { item, classes } = this.props;
    return (
      <main>
        <ViewWrapperComponent
          isLoading={item.isLoading}
          loader={(<CircularProgress />)}
          error={item.error}
        >
          <div className={classes.centeredHeader}>
            <h1>{item.title}</h1>
            <small>
              Posted by author 
              {item.userId}
            </small>
          </div>
          <p>{item.body}</p>
        </ViewWrapperComponent>
      </main>
    );
  }
}

ItemContainer.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  getItem: PropTypes.func.isRequired,
  toggleSearch: PropTypes.func.isRequired,
  match: PropTypes.instanceOf(Object),
  item: PropTypes.shape({
    isLoading: PropTypes.bool,
    title: PropTypes.string,
    body: PropTypes.string,
    userId: PropTypes.number,
    error: PropTypes.string,
  }),
};

ItemContainer.defaultProps = {
  item: {
    isLoading: false,
    userId: 0,
    error: '',
    title: 'Test Item',
    body: 'Test Body',    
  },
  match: {
    params: {
      postId: 1,
    },
  },
};

const mapStateToProps = ({ item }) => ({
  item,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getItem: itemActions.getItem,
  toggleSearch: headActions.toggleSearch,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(withStyles(styles)(ItemContainer)));
