import alertConstants from '../constants/alert.constants';

function success(message) {
  return { type: alertConstants.SUCCESS, message };
}

function error(message) {
  return { type: alertConstants.ERROR, message };
}

function clear(message) {
  return { type: alertConstants.CLEAR, message };
}

const alertActions = {
  success,
  error,
  clear
};

export default alertActions;
