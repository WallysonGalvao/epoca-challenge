import axios from 'axios';

const twitterApi = axios.create({
  baseURL: 'https://api.twitter.com/1.1',
  headers: {
    Authorization:
      'Bearer AAAAAAAAAAAAAAAAAAAAADSJGAEAAAAAEopcVCZMEJGo%2BGZ9%2FaNaT2HNZjA%3DGvGLZZBKubBPf9iNM8mcVmnyQI89zOHptj3B1U6zmnb7tZVwUN',
  },
});

export default twitterApi;
