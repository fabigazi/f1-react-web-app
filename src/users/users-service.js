import axios from "axios";

const SERVER = "http://localhost:4000";
// const USER_API = `${SERVER}/users`;
// const BASE_API = `${SERVER}/api`;
//const SERVER = process.env.REACT_APP_API_BASE;
const BASE_API = `${SERVER}/api`;
const USER_API = `${SERVER}/users`;

const request = axios.create({
  withCredentials: true,
});

export const login = async (user) => {
  const response = await request.post(`${BASE_API}/login`, user);
  console.log(BASE_API);
  return response.data;
};

export const register = async (user) => {
  const response = await request.post(`${BASE_API}/register`, user);
  return response.data;
};

export const logout = async () => {
  const response = await request.post(`${BASE_API}/logout`);
  return response.data;
};

export const getProfile = async () => {
  const response = await request.get(`${BASE_API}/profile`);
  return response;
};

export const getIdProfile = async (uid) => {
  const response = await request.get(`${USER_API}/${uid}`);
  return response;
};

export const getUsers = async () => {
  const response = await axios.get(USER_API);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(USER_API, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${USER_API}/${id}`);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await axios.post(`${BASE_API}/update`, user);
  return response.data;
};
