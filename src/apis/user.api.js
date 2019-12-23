/* eslint-disable no-undef */
// import authHeader from '../helpers/auth-header';
import constantApi from './constants.api';

function handleResponse(response) {
  if (!response.ok) {
    if (response.status === 401) {
      // auto logout if 401 response returned from api
      // logout();
      localStorage.clear();
      window.location.reload(true);
      return Promise.reject(response.statusText);
    }
  }

  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  // eslint-disable-next-line no-undef
  return fetch(`${constantApi.url}/users/register`, requestOptions)
    .then(handleResponse)
    .then(currentUser => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(currentUser));

      return currentUser;
    });
}

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };

  // eslint-disable-next-line no-undef
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

  // eslint-disable-next-line no-undef
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

  // eslint-disable-next-line no-undef
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
  // eslint-disable-next-line no-undef
  return fetch(`${constantApi.url}/tutor/uploadAvatar`, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
}

function updateProfile(token, name, address) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ name, address })
  };
  // eslint-disable-next-line no-undef
  return fetch(`${constantApi.url}/users/changeProfile`, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
}

function changePassword(token, currentPassword, newPassword, confirmPassword) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ currentPassword, newPassword, confirmPassword })
  };
  // eslint-disable-next-line no-undef
  return fetch(`${constantApi.url}/users/changePassword`, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
}
function getAllMessage(idStudent, idTutor) {
  const requestOptions = {
    method: 'GET'
  };
  return fetch(
    `${constantApi.url}/users/getMessage?idStudent=${idStudent}&idTutor=${idTutor}`,
    requestOptions
  )
    .then(handleResponse)
    .then(data => {
      return data;
    });
}
function sendMessage(message) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  };
  return fetch(`${constantApi.url}/users/sendMessage`, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
}
const userApis = {
  register,
  login,
  loginFB,
  loginGG,
  updateAvatar,
  updateProfile,
  changePassword,
  getAllMessage,
  sendMessage
};

export default userApis;
