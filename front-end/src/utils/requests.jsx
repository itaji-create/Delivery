import axios from 'axios';

const port = process.env.REACT_APP_BACKEND_PORT;
const host = process.env.REACT_APP_HOSTNAME;

const api = axios.create({
  baseURL: port ? `http://${host}:${port}` : `http://${host}`,
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

export const updateSale = async (endpoint, body, token) => {
  const { data } = await api.put(endpoint, body, {
    headers: { Authorization: token },
  });
  return data;
};

export const deleteItem = async (endpoint, id, token) => {
  await api.delete(`${endpoint}/delete/${id}`, {
    headers: { Authorization: token },
  });
};

export default api;
