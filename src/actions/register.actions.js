import userConstants from '../constants/user.constants';

export const requestRegister = (username, password) => {
  return { type: userConstants.LOGIN_REQUEST, username, password };
};

export const successRegister = userInfo => {
  return { type: userConstants.LOGIN_SUCCESS, userInfo };
};
export const failureRegister = error => {
  return { type: userConstants.LOGIN_FAILURE, error };
};
