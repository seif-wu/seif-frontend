import axios from 'axios';
import { stringify } from 'qs';
import type { Axios, AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8088' : '',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
  paramsSerializer: function (params) {
    return stringify(params, { arrayFormat: 'brackets' });
  },
});

// 请求前拦截器
api.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: 'Bearer FakeToken', // TODO Get Token
      },
    };
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

const apiRequest = async (
  url: string,
  options: AxiosRequestConfig,
  requestFunc: Axios['get' | 'put' | 'delete' | 'post']
) => {
  try {
    const response = await requestFunc(url, options);

    return { response: response.data, status: response.status };
  } catch (error: any) {
    if (error.response) {
      throw { error: error.response.data, status: error.response.status };
    }

    if (error.request) {
      throw {
        success: false,
        code: '41800',
        message: '请求时网络异常，请重试',
      };
    }

    throw { success: false, code: '41801', message: '客户端发生异常，请重试' };
  }
};

export default {
  get: (url: string, options: AxiosRequestConfig) =>
    apiRequest(url, options, api.get),
  put: (url: string, options: AxiosRequestConfig) =>
    apiRequest(url, options, api.put),
  post: (url: string, options: AxiosRequestConfig) =>
    apiRequest(url, options, api.post),
  delete: (url: string, options: AxiosRequestConfig) =>
    apiRequest(url, options, api.delete),
};
