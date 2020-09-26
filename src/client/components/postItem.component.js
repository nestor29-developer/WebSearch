import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PostItemComponent extends Component {
  handleEditClick(item) {
    const { editDialog } = this.props;
    editDialog(item);
  }

  renderNoResult() {
    const { searchInputText } = this.props;
    if (searchInputText) {
      return (<p>Results aren't found</p>);
    }
    return (<p>You don't have any posts here.</p>);
  }

  render() {
    const { items } = this.props;
    return (
      <article>
        {items.length
          ? items
            .map((item) => (
              <div key={item.id}>
                <h1>{item.title}</h1>
                <p>
                  {item.body}
                </p>
                <Grid container justify="space-between">
                  <Button component={Link} to={`/post/${item.id}`} size="medium" variant="contained" color="secondary">
                    Read All ->
                  </Button>
                  <Button aria-label="edit" role="button" name="edit" color="primary" variant="outlined" onClick={() => this.handleEditClick(item)}>
                    Edit ->
                  </Button>
                </Grid>
              </div>
            ))
          : this.renderNoResult()}
      </article>
    );
  }
}

PostItemComponent.propTypes = {
  editDialog: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
      userId: PropTypes.number,
    }),
  ),
  searchInputText: PropTypes.string,
};

PostItemComponent.defaultProps = {
  items: [],
  searchInputText: '',
};

export default PostItemComponent;
