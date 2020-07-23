import axios from 'axios';

const googleApi = axios.create({
  baseURL: 'https://language.googleapis.com/v1beta2',
});

export default googleApi;
