import userConstants from '../constants/user.constants';

const registration = (state = {}, action) => {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { loading: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};

export default registration;
