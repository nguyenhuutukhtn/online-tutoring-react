export const requestListTutor = (page, listSkill, from, to, cb) => {
  let check = true;
  return () => {
    let url = 'http://localhost:3100/tutor/list';
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
    const url = 'http://localhost:3100/skill';
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
    const url = `http://localhost:3100/tutor/${id}`;
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

export const requestOutStandingTutor = (cb) => {
  return () => {
    let check = true;
    const url = `http://localhost:3100/tutor/listOutStanding`;
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
