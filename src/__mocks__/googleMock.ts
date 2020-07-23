import AxiosMock from 'axios-mock-adapter';
import googleApi from '../services/googleApi';

export default new AxiosMock(googleApi);
