import { BASE_URL } from 'utils/constants';


export const LOGIN_API = BASE_URL + 'login/';

export function loginApi(data) {
  return fetch(LOGIN_API, {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => {
      if (!response.success) throw Error;
      return response
    })
    .catch(error => {
      throw error;
    })
}
