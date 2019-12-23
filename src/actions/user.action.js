/* eslint-disable no-unused-vars */
import userApis from '../apis/user.api';
import alertActions from './alert.action';
import history from '../helpers/history';
import { request, success, failure } from './login.actions';
import {
  requestRegister,
  successRegister,
  failureRegister
} from './register.actions';
import userConstants from '../constants/user.constants';

function register(user) {
  return dispatch => {
    dispatch(requestRegister(user));

    userApis.register(user).then(
      () => {
        dispatch(successRegister());
        history.push('/');
        dispatch(alertActions.success('Đăng ký tài khoản thành công'));
        window.location.reload();
      },
      error => {
        dispatch(failureRegister(error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

function login(username, password) {
  return dispatch => {
    dispatch(request(username, password));

    userApis.login(username, password).then(
      () => {
        dispatch(success());
        dispatch(alertActions.success('Đăng nhập thành công'));
        history.push({
          pathname: history.location.pathname,
          search: history.location.search
        });
        window.location.reload();
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

function loginFB(name, fbId) {
  return dispatch => {
    dispatch(request(name, fbId));

    userApis.loginFB(name, fbId).then(
      () => {
        dispatch(success());
        history.push('/');
        dispatch(alertActions.success('Đăng nhập thành công'));
        window.location.reload();
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

function loginGG(name, googleId) {
  return dispatch => {
    dispatch(request(name, googleId));

    userApis.loginGG(name, googleId).then(
      () => {
        dispatch(success());
        history.push('/');
        dispatch(alertActions.success('Đăng nhập thành công'));
        window.location.reload();
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

function updateAvatar(id, avatarUrl) {
  return dispatch => {
    userApis
      .updateAvatar(id, avatarUrl)
      .then(() => {
        dispatch(alertActions.success('Cập nhật ảnh đại diện thành công'));
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      })
      .catch(error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      });
  };
}

const updateProfile = (token, name, address) => {
  return dispatch => {
    userApis
      .updateProfile(token, name, address)
      .then(() => {
        dispatch(alertActions.success('Cập nhật profile thành công'));
      })
      .catch(error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.toString()));
      });
  };
};

const changePassword = (
  token,
  currentPassword,
  newPassword,
  confirmPassword
) => {
  return dispatch => {
    userApis
      .changePassword(token, currentPassword, newPassword, confirmPassword)
      .then(() => {
        dispatch(alertActions.success('Cập nhật mật khẩu thành công'));
      })
      .catch(error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.toString()));
      });
  };
};

const requestPayPolicy = (token, id) => {
  return dispatch => {
    userApis
      .requestPayPolicy(token, id)
      .then(() => {
        dispatch(alertActions.success('Thanh toán hợp đồng thành công'));
        setTimeout(() => {
          history.push('/tutor-contract');
        }, 4000);
      })
      .catch(error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.toString()));
        setTimeout(() => {
          history.push('/tutor-contract');
        }, 4000);
      });
  };
};

const requestCancelPolicy = (token, id) => {
  return dispatch => {
    userApis
      .requestCancelPolicy(token, id)
      .then(() => {
        dispatch(alertActions.success('Huỷ hợp đồng thành công'));
        setTimeout(() => {
          history.push('/tutor-contract');
        }, 4000);
      })
      .catch(error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.toString()));
        setTimeout(() => {
          history.push('/tutor-contract');
        }, 4000);
      });
  };
};

const requestCompletePolicy = (token, id, comment, rate) => {
  return dispatch => {
    userApis
      .requestCompletePolicy(token, id, comment, rate)
      .then(() => {
        dispatch(alertActions.success('Hoàn tất hợp đồng thành công'));
        setTimeout(() => {
          history.push('/tutor-contract');
        }, 4000);
      })
      .catch(error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.toString()));
        setTimeout(() => {
          history.push('/tutor-contract');
        }, 4000);
      });
  };
};

const requestReportPolicy = (token, id, content) => {
  return dispatch => {
    userApis
      .requestReportPolicy(token, id, content)
      .then(() => {
        dispatch(alertActions.success('Khiếu nại hợp đồng thành công'));
        setTimeout(() => {
          history.push('/tutor-contract');
        }, 4000);
      })
      .catch(error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.toString()));
        setTimeout(() => {
          history.push('/tutor-contract');
        }, 4000);
      });
  };
};

const requestProfile = (id, cb) => {
  let check = true;
  return () => {
    const url = `http://localhost:3100/users/profile?id=${id}`;
    // eslint-disable-next-line no-undef
    fetch(url, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status !== 200) {
          check = false;
        }
        return response.json();
      })
      .then(response => {
        if (check) {
          cb(response);
        }
      });
  };
};
const allMessageAction = data => {
  return { type: userConstants.GET_MESSAGE_SUCCESS, allMessage: data };
};
function getAllMessage(idStudent, idTutor) {
  return dispatch => {
    userApis.getAllMessage(idStudent, idTutor).then(data => {
      dispatch(allMessageAction(data));
    });
  };
}

const loadDataOtherAction = data => {
  return { type: userConstants.LOAD_DATA_TUTOR, data };
};
function loadDataOther(id) {
  return dispatch => {
    dispatch(
      requestProfile(id, function cb(res) {
        dispatch(loadDataOtherAction(res));
      })
    );
  };
}
function sendMessage(message) {
  return dispatch => {
    userApis.sendMessage(message).then(res => {
      return res;
    });
  };
}
const requestRegisterPolicy = (tutorId, hoursHire, token) => {
  return dispatch => {
    userApis
      .registerPolicy(tutorId, hoursHire, token)
      .then(() => {
        dispatch(
          alertActions.success(
            'Đăng ký học thành công, vui lòng thanh toán và chờ giáo viên chấp nhận'
          )
        );
      })
      .catch(error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.toString()));
      });
  };
};

export const requestPolicyOfStudent = (
  page,
  unpaidPolicy,
  validPolicy,
  token,
  cb
) => {
  let check = true;
  let url = 'http://localhost:3100/student/policy';
  const params = {
    p: page,
    unpaidPolicy,
    validPolicy
  };
  if (Object.keys(params)) {
    url = url.concat('?');
  }

  Object.keys(params).forEach(key => {
    if (params[key]) {
      url = url.concat(`${key}=${params[key]}&`);
    }
  });

  url = url.slice(0, url.length - 1);

  return () => {
    // eslint-disable-next-line no-undef
    fetch(url, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.status !== 200) {
          check = false;
        }
        return response.json();
      })
      .then(response => {
        if (check) {
          cb(response);
        }
        return null;
      });
  };
};

const requestPolicyDetail = (id, token, cb) => {
  return () => {
    userApis.requestPolicyDetail(id, token, cb);
  };
};

const userActions = {
  register,
  login,
  loginFB,
  loginGG,
  updateAvatar,
  requestProfile,
  updateProfile,
  changePassword,
  getAllMessage,
  loadDataOther,
  sendMessage,
  requestRegisterPolicy,
  requestPolicyOfStudent,
  requestPolicyDetail,
  requestPayPolicy,
  requestCancelPolicy,
  requestCompletePolicy,
  requestReportPolicy
};

export default userActions;
