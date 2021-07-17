/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { BASE_API_ROOT } from '../../constant';

class AxiosService {
  constructor() {
    this.instance = axios.create({
      headers: this._getHeaders(),
      baseURL: BASE_API_ROOT
    });

    this.instance.interceptors.request.use(
      this._interceptBeforeRequest,
      this._interceptRequestError,
    );

    this.instance.interceptors.response.use(
      this._interceptResponseData,
      this._interceptResponseError,
    );
  }

  _getHeaders() {
    return {
      'Content-Type': 'application/json',
    };
  }

  async _interceptBeforeRequest(config) {
    const cloneConfig = { ...config };

    if (!config.url) {
      return Promise.reject(new Error('[AxiosService] URL must not be blank'));
    }

    return cloneConfig;
  }

  _interceptRequestError(error) {
    // Do something with request error
    return Promise.reject(error);
  }

  _interceptResponseData(response) {
    // Do something with response data
    return response;
  }

  _interceptResponseError(error) {
    // Do something with response error
    return Promise.reject(error);
  }

  get(url = '/', params = {}, config = {}) {
    return this.instance.get(url, {
      params,
      ...config,
    });
  }

  post(url = '/', data, config = {}) {
    return this.instance.post(url, data, config);
  }
}

const axiosInstance = new AxiosService();

export default axiosInstance;
