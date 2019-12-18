import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import './alert.css';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

class CustomSnackbarContentWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { variant, message, onClose } = this.props;
    const Icon = variantIcon[variant];

    return (
      <SnackbarContent
        className={variant}
        aria-describedby="client-snackbar"
        message={
          <span
            id="client-snackbar"
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Icon
              style={{
                fontSize: 20,
                opacity: 0.9,
                marginRight: 2
              }}
            />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon style={{ fontSize: 20 }} />
          </IconButton>
        ]}
      />
    );
  }
}

export default CustomSnackbarContentWrapper;
