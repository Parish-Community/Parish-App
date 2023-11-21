import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.14:8888/api/v1',
});

const setAuthTokenHeader = async (token: string) => {
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

export const logout = async (token: string) => {
  await setAuthTokenHeader(token);
  return api.get('/auth/logout');
};

export const verifyToken = async (authToken: string) => {
  await setAuthTokenHeader(authToken);
  return api.get('/auth/verify-token');
};

// export const getCoupleDetail = async (authToken: string) => {
//   await setAuthTokenHeader(authToken);
//   return api.get('auth/verify-token');
// };

export const getUserById = async (id: any) => {
  // await setAuthTokenHeader(authToken);
  return api.get(`/parishioner/profile/${id}`);
};

export const getCoupleDetail = async (id: any) => {
  // await setAuthTokenHeader(authToken);
  return api.get(`/course/couple-detail/${id}`);
};

export const getPartnerByPhonenumber = async (phonenumber: any) => {
  // await setAuthTokenHeader(authToken);
  return api.get(`/parishioner/profile-partner/${phonenumber}`);
};

export const coupleRegistration = async (payload: any, authToken: any) => {
  await setAuthTokenHeader(authToken);
  const data = await api.post('/course/couple-registration', payload);
  console.log(data);
  return data;
};
