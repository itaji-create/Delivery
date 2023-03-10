import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3003',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestPost = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestGet = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const createSale = async (endpoint, body, token) => {
  const { data } = await api.post(endpoint, body, {
    headers: { Authorization: token },
  });
  return data;
};

export default api;
