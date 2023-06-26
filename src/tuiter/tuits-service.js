import axios from "axios";

const SERVER = "https://f1-node-server-app.onrender.com";
const BASE_API = `${SERVER}/api`;

const request = axios.create({
  withCredentials: true,
});

export const createTuit = async (tuit) => {
  const response = await request.post(`${BASE_API}/tuits`, tuit);
  return response.data;
};

export const findMyTuits = async () => {
  const response = await request.get(`${BASE_API}/my-tuits`);
  return response.data;
};

export const findAllTuits = async () => {
  const response = await request.get(`${BASE_API}/tuits`);
  return response.data;
};