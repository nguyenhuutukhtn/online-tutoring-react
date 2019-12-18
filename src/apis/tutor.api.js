import constantApi from './constants.api';

// eslint-disable-next-line import/prefer-default-export
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

const tutorApis = {
  updateTutorProfile
};

export default tutorApis;
