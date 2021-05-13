import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:7000/api/v1/',
});

api.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    err.message = handleError(err);
    return Promise.reject(err);
  },
);

function handleError(err: AxiosError) {
  let message = 'Uknown error please try again';
  if (!err.response) {
    message = 'Error conecting to the API';
  } else if (err.response.data.error) {
    ({ message } = err.response.data.error);
  } else if (Array.isArray(err.response.data)) {
    ({ message } = err.response.data[0]);
  } else if (err.response.data) {
    ({ message } = err.response.data);
  }
  return message;
}

export default api;
