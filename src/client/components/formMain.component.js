import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';


export const DEFAULT_FORM_VALUES = {
  title: '',
  body: '',
  isOpen: false,
  id: 0 
};

const validateMinimumLetters = (text = '') => text.length < 1;

class FormMainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...DEFAULT_FORM_VALUES,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.editForm.id !== state.id) {
      return {
        ...state,
        ...props.editForm,
      };
    }
    return state;
  }

  handleClose = () => {
    const { hideDialog } = this.props;
    hideDialog();
    this.setState({
      ...DEFAULT_FORM_VALUES,
    });
  };

  handleSave = () => {
    const { hideDialog, updatePost, editForm } = this.props;
    const { title, body } = this.state;
    updatePost({
      id: editForm.id,
      title: title.trim(),
      body: body.trim(),
    });
    hideDialog();
    this.setState({
      ...DEFAULT_FORM_VALUES,
    });
  };

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  handleBodyChange = (e) => {
    this.setState({
      body: e.target.value,
    });
  }

  render() {
    const { isOpen, title, body } = this.state;
    return (
      <div>
        <Dialog
          open={isOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Post here</DialogTitle>
          <DialogContent>
            <DialogContentText>
              If you want you could edit this post.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              name="title"
              value={title}
              error={validateMinimumLetters(title)}
              helperText={validateMinimumLetters(title) ? 'Should have at least one character' : ' '}
              onChange={this.handleTitleChange}
              inputProps={{ 'data-testid': 'title' }}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="body"
              label="Body"
              type="text"
              value={body}
              error={validateMinimumLetters(body)}
              helperText={validateMinimumLetters(body) ? 'Should have at least one character' : ''}
              onChange={this.handleBodyChange}
              inputProps={{ 'data-testid': 'body' }}
              fullWidth
              multiline
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose}
              role="button"
              name="cancel"
              color="primary"
            >
              Cancel
            </Button>
            <Button
              onClick={this.handleSave}
              role="button"
              name="save"
              variant="contained"
              color="primary"
              disabled={(validateMinimumLetters(title) || validateMinimumLetters(body))}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

FormMainComponent.propTypes = {
  editForm: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  hideDialog: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
};

export default FormMainComponent;
