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

    console.log('----url', url);

    // eslint-disable-next-line no-undef
    fetch(url, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify({
      //   email,
      //   password
      // })
    })
      .then(response => {
        if (response.status !== 200) {
          console.log('xxxxxx');
          check = false;
        }
        return response.json();
      })
      .then(response => {
        // eslint-disable-next-line no-console
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
      // body: JSON.stringify({
      //   email,
      //   password
      // })
    })
      .then(response => {
        if (response.status !== 200) {
          console.log('xxxxxx');
          check = false;
        }
        return response.json();
      })
      .then(response => {
        // eslint-disable-next-line no-console
        if (check) {
          cb(response);
        }
      });
  };
};
