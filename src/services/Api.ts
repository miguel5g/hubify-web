import axios from 'axios';

let baseURL: string;

if (process.browser)
  baseURL =
    window.location.origin === 'http://localhost:3000'
      ? 'http://localhost:3333'
      : 'https://hubify-api.herokuapp.com';
else
  baseURL =
    process.env.NODE_ENV === 'production'
      ? 'https://hubify-api.herokuapp.com'
      : 'http://localhost:3333';

export const api = axios.create({
  baseURL,
});
