import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import CustomSnackbarContentWrapper from './CustomSnackbarContentWrapper';

class CustomAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { open } = this.state;
    const { variant, message, onClose, open } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
      >
        {!open ? null : (
          <CustomSnackbarContentWrapper
            onClose={onClose}
            variant={variant}
            message={message}
          />
        )}
      </Snackbar>
    );
  }
}

export default CustomAlert;
