import axios from 'axios';
import { stringify } from 'qs';
import type { AxiosRequestConfig } from 'axios';

const request = async (config: AxiosRequestConfig<any>) => {
  try {
    const response = await axios.request({
      paramsSerializer: function (params) {
        return stringify(params, { arrayFormat: 'brackets' });
      },
      ...config,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...config.headers,
      },
    });

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

export default request;
