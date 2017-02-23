import axios from 'axios';
import { getIdToken } from './AuthService.js';

const BASE_URL = 'https://chuck-norris-api.herokuapp.com';

export { getFoodData, getCelebrityData };

function getFoodData() {
  const url = `${BASE_URL}/api/jokes/food`;
  return axios.get(url).then(response => response.data);
}

function getCelebrityData() {
  const url = `${BASE_URL}/api/jokes/celebrity`;
  return axios.get(
    url,
    { headers: { Authorization: `Bearer ${getIdToken()}`}}
  ).then(response => response.data);
}