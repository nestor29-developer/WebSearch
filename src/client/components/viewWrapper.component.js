import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = () => ({
  spacer: {
    padding: '2rem',
  },
});
class ViewWrapperComponent extends Component {
  conditionalRender() {
    const {
      isLoading, loader, error, children, classes,
    } = this.props;
    if (isLoading) {
      return (<Grid container className={classes.spacer} justify="center">{loader}</Grid>);
    }
    if (error) {
      return (<Grid container className={classes.spacer} justify="center">{error}</Grid>);
    }

    return <>{children}</>;
  }

  render() {
    return (
      <div>
        {this.conditionalRender()}
      </div>
    );
  }
}

ViewWrapperComponent.propTypes = {  
  error: PropTypes.string,
  loader: PropTypes.element,
  children: PropTypes.node,
  classes: PropTypes.instanceOf(Object).isRequired,
  isLoading: PropTypes.bool.isRequired
};

ViewWrapperComponent.defaultProps = {
  children: <>No Content</>,
  error: 'It was wrong, try later ',
  loader: <>Loading...</>,
};

export default withStyles(styles)(ViewWrapperComponent);
