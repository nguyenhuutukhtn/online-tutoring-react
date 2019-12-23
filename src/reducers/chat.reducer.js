import userConstants from '../constants/user.constants';

const initialState = {};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.GET_MESSAGE_SUCCESS:
      return {
        ...state,
        message: action.allMessage
      };
    case userConstants.LOAD_DATA_TUTOR:
      return {
        ...state,
        otherData: action.data
      };
    default:
      return state;
  }
};

export default chat;
