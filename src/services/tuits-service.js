import axios from "axios";
const TUITS_API = "https://cs4550-web-dev-node-server.herokuapp.com/api/tuits";

export const findAllTuits = async () => {
  const response = await axios.get(TUITS_API);
  return response.data;
};

export const createTuit = async (tuit) => {
  const response = await axios.post(TUITS_API, tuit);
  return response.data;
};

export const deleteTuit = async (tuit) => {
  const response = await axios.delete(`${TUITS_API}/${tuit._id}`);
  return response.data;
};

export const updateTuit = async (tuit) => {
  const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
  return response.data;
};
