import userConstants from '../constants/user.constants';

export const request = (username, password) => {
  return { type: userConstants.LOGIN_REQUEST, username, password };
};

export const success = userInfo => {
  return { type: userConstants.LOGIN_SUCCESS, userInfo };
};
export const failure = error => {
  return { type: userConstants.LOGIN_FAILURE, error };
};
