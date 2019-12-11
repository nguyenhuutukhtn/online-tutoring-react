import userConstants from '../constants/user.constants';

const userInfo = JSON.parse(localStorage.getItem('userInfo'));
const initialState = userInfo ? { loggedIn: true, userInfo } : {};

const login = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        userInfo: action.userInfo
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        userInfo: action.userInfo
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};

export default login;
