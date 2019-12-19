import constantApi from './constants.api';

// eslint-disable-next-line import/prefer-default-export
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

const updateTutorProfile = (
  name,
  pricePerHour,
  address,
  introduce,
  listSkill,
  token
) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ name, pricePerHour, address, introduce, listSkill })
  };

  // eslint-disable-next-line no-undef
  return fetch(`${constantApi.url}/tutor/updateProfile`, requestOptions)
    .then(response => {
      if (response.status !== 200) {
        return false;
      }
      return response.json();
    })
    .then(response => {
      return response;
    });
};

const requestPolicyDetail = (id, token, cb) => {
  let check = true;
  const requestOptions = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };

  // eslint-disable-next-line no-undef
  return fetch(`${constantApi.url}/tutor/policy/${id}`, requestOptions)
    .then(response => {
      if (response.status !== 200) {
        check = false;
        return false;
      }
      return response.json();
    })
    .then(response => {
      if (check) {
        cb(response);
      }
    });
};

const approvePolicy = (id, token) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ id })
  };

  // eslint-disable-next-line no-undef
  return fetch(`${constantApi.url}/tutor/approvePolicy`, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    });
};

const cancelPolicy = (id, token) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ id })
  };

  // eslint-disable-next-line no-undef
  return fetch(`${constantApi.url}/tutor/cancelPolicy`, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    });
};

const tutorApis = {
  updateTutorProfile,
  requestPolicyDetail,
  approvePolicy,
  cancelPolicy
};

export default tutorApis;
