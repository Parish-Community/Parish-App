import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.14:8888/api/v1',
});

const setAuthTokenHeader = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const getPosts = () => {
  return api.get('/posts');
};

export const registrationAccount = (postData: any) => {
  return api.post('/parishioner/registration-account', postData);
};

export const loginAccount = (payload: any) => {
  return api.post('/auth/login', payload);
};

export const verifyToken = async (authToken: string) => {
  await setAuthTokenHeader(authToken);
  return api.get('auth/verify-token');
};
