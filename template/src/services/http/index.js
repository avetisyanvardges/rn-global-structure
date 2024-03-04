import axios from 'axios';
import { isEmpty } from 'lodash';
import DeviceInfo from 'react-native-device-info';
import { deviceInfo } from '../../utils/deviceInfo';
import { getAuthToken } from '../api';
import { API_BASE_URL } from '../../constants/url';

const requestConfig = {
  baseURL: API_BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const httpClient = axios.create(requestConfig);

const handleRequest = async config => {
  const token = await getAuthToken();

  if (config.headers) {
    // config.headers['X-localization'] = await locale;
    if (deviceInfo.ios) {
      config.headers['guid-id'] = await DeviceInfo.getUniqueId();
    } else {
      config.headers['app-id'] = await DeviceInfo.getUniqueId();
    }

    if (!isEmpty(token)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
};

const handleResponse = response => {
  return response;
};

const handleError = async error => {
  if (error.response && error.response?.status === 500) {
  }

  if (error.response && error.response?.status === 403) {
    // await userErrorHandler(error.response.data);
  }

  if (error.response && error.response?.status === 498) {
  }

  if (error.response && error.response?.status === 503) {
  }

  if (error.response && error.response.data && error.response?.status !== 401) {
  }

  return Promise.reject(error);
};

httpClient.interceptors.request.use(handleRequest);

httpClient.interceptors.response.use(handleResponse, handleError);

export { httpClient };
