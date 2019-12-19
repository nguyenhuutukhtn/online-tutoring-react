import userApis from '../apis/user.api';
import alertActions from './alert.action';
import history from '../helpers/history';
import { request, success, failure } from './login.actions';
import {
  requestRegister,
  successRegister,
  failureRegister
} from './register.actions';

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

const userActions = {
  register,
  login,
  loginFB,
  loginGG,
  updateAvatar,
  requestProfile,
  updateProfile,
  changePassword,
  requestRegisterPolicy
};

export default userActions;
