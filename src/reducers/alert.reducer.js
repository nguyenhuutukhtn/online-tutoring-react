import alertConstants from '../constants/alert.constants';

const initialState = {
  message: '',
  open: false
};

const alert = (state = initialState, action) => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'success',
        message: action.message,
        open: true
      };
    case alertConstants.ERROR:
      return {
        type: 'error',
        message: action.message,
        open: true
      };
    case alertConstants.CLEAR:
      return {
        type: 'clear',
        message: 'clear',
        open: false
      };
    default:
      return state;
  }
};

export default alert;
