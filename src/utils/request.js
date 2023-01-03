const BASE_URL = 'https://api.moviexplorers.nomoredomains.club';
// const BASE_URL = 'http://localhost:3001';

const request = ({ url, method, data }) => {
  return fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    ...(!!data && { body: JSON.stringify(data) }),
  })
  .then((res) => {
    return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
  })
};

export default request;
