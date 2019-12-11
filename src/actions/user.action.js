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
      .then(data => {
        console.log('data---------', data);
        dispatch(alertActions.success('Cập nhật ảnh đại diện thành công'));
      })
      .catch(error => {
        console.log('err-------', error);
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      });
  };
}

const userActions = {
  register,
  login,
  loginFB,
  loginGG,
  updateAvatar
};

export default userActions;
