import axios from 'axios';

let baseURL: string;

if (process.browser)
  baseURL =
    window.location.origin === 'http://192.168.0.100:3000'
      ? 'http://192.168.0.100:3333'
      : 'https://hubify-api.herokuapp.com';
else
  baseURL =
    process.env.NODE_ENV === 'production'
      ? 'https://hubify-api.herokuapp.com'
      : 'http://192.168.0.100:3333';

export const api = axios.create({
  baseURL,
  withCredentials: true,
});
