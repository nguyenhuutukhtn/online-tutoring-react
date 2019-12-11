import { authHeader } from '../helpers/auth-header';
import { constantApi } from './constants.api';

export const userApis = {
  register,
  login,
  loginFB,
  loginGG,
  updateAvatar
};

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${constantApi.url}/users/register`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
}

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };
  console.log(`request: ${requestOptions}`);

  return fetch(`${constantApi.url}/users/login`, requestOptions)
    .then(handleResponse)
    .then(userInfo => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('userInfo', JSON.stringify(userInfo));

      return userInfo;
    });
}

function loginFB(name, fbId) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, fbId })
  };
  console.log(`request: ${requestOptions}`);

  return fetch(`${constantApi.url}/users/loginFB`, requestOptions)
    .then(handleResponse)
    .then(userInfo => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('userInfo', JSON.stringify(userInfo));

      return userInfo;
    });
}

function loginGG(name, googleId) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, googleId })
  };
  console.log(`request: ${requestOptions}`);

  return fetch(`${constantApi.url}/users/loginGG`, requestOptions)
    .then(handleResponse)
    .then(userInfo => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('userInfo', JSON.stringify(userInfo));

      return userInfo;
    });
}

function updateAvatar(id, avatarUrl) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, avatarUrl })
  };
  return fetch(`${constantApi.url}/tutor/uploadAvatar`, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
}
function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    console.log(`aaaaaaaaaaaaaaaaaaa${data}`);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
