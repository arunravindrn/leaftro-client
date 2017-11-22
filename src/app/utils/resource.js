import { call } from 'redux-saga/effects';

import { BASE_URL, TOKEN } from './constants';


// simple api generator.
const apiGenerator = (url, authenticate = true) => {

  const apiUrl = `${BASE_URL}${url}/`;

  const retrieve = (url, method, data, queryParams = {}) => {

    if (data.id) {
      url = `${url}${data.id}/`;
    } else {
      let params = '?';
      for (key in queryParams) {
        params += `${key}=${queryParams[key]}&`
      }
      url = `${url}${params}`;
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': authenticate ? `Token ${TOKEN}` : ''
    };

    const options = {
      headers,
      method,
      body: JSON.stringify(data)
    }

    return fetch(url, options);
  }

  return {
    get: () => retrieve(apiUrl, 'GET'),
    post: (data) => retrieve(apiUrl, 'POST', data)
  }
}


export default apiGenerator;
