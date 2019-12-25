import tutorApis from '../apis/tutor.api';
import alertActions from './alert.action';
import history from '../helpers/history';

export const requestListTutor = (page, listSkill, from, to, cb) => {
  let check = true;
  return () => {
    let url = 'https://smart-tutor-server.herokuapp.com/tutor/list';
    const params = {
      p: page,
      skill: listSkill,
      from,
      to
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

export const requestListSkill = cb => {
  return () => {
    let check = true;
    const url = 'https://smart-tutor-server.herokuapp.com/skill';
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

export const requestTutorDetail = (id, cb) => {
  return () => {
    let check = true;
    const url = `https://smart-tutor-server.herokuapp.com/tutor/${id}`;
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

export const requestOutStandingTutor = cb => {
  return () => {
    let check = true;
    const url = `https://smart-tutor-server.herokuapp.com/tutor/listOutStanding`;
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

export const requestTutorIntroduce = (id, cb) => {
  let check = true;
  return () => {
    const url = `https://smart-tutor-server.herokuapp.com/tutor/introduce?id=${id}`;
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

export const requestTutorSkills = (id, cb) => {
  let check = true;
  return () => {
    const url = `https://smart-tutor-server.herokuapp.com/tutor/listSkill?id=${id}`;
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

export const requestPolicyOfTutor = (page, isNew, token, cb) => {
  let check = true;
  let url = 'https://smart-tutor-server.herokuapp.com/tutor/policy';
  const params = {
    p: page,
    isNew
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

export const updateTutorProfile = (
  name,
  pricePerHour,
  address,
  introduce,
  listSkill,
  token
) => {
  return dispatch => {
    tutorApis
      .updateTutorProfile(
        name,
        pricePerHour,
        address,
        introduce,
        listSkill,
        token
      )
      .then(() => {
        dispatch(alertActions.success('Cập nhật profile thành công'));
      })
      .catch(error => {
        dispatch(alertActions.error(error));
      });
  };
};

export const requestPolicyDetail = (id, token, cb) => {
  return () => {
    tutorApis.requestPolicyDetail(id, token, cb);
  };
};

export const requestApprovePolicy = (id, token) => {
  return dispatch => {
    tutorApis
      .approvePolicy(id, token)
      .then(() => {
        dispatch(alertActions.success('chấp nhận hợp đồng thành công'));
        setTimeout(() => {
          history.push('/tutor-contract');
        }, 4000);
      })
      .catch(error => {
        dispatch(alertActions.error(error));
        setTimeout(() => {
          history.push('/tutor-contract');
        }, 4000);
      });
  };
};

export const requestCancelPolicy = (id, token) => {
  return dispatch => {
    tutorApis
      .cancelPolicy(id, token)
      .then(() => {
        dispatch(alertActions.success('từ chối hợp đồng thành công'));
        setTimeout(() => {
          history.push('/tutor-contract');
        }, 4000);
      })
      .catch(error => {
        dispatch(alertActions.error(error));
        setTimeout(() => {
          history.push('/tutor-contract');
        }, 4000);
      });
  };
};

export const requestIncomeStatistic = (token, cb) => {
  let check = true;
  const url = 'https://smart-tutor-server.herokuapp.com/tutor/incomeStatistic';
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
