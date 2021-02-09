import axios, { AxiosError, AxiosResponse, Method } from 'axios';

const API_URL = 'https://api.github.com';

export interface IRequestParams {
  url: string;
  method?: Method;
  headers?: any;
  data?: any;
  params?: any;
}

class HttpService {
  client = axios.create({
    withCredentials: true,
  });

  request = (params: IRequestParams) => {
    const requestParams = {
      url: `${API_URL}/${params.url}`,
      method: params.method,
      data: params.data,
      params: params.params,
    };

    return axios
      .request(requestParams)
      .then((response: AxiosResponse<any>) => response.data)
      .catch((error: AxiosError<any>) => {
        console.log(error);
        throw error;
      });
  };

  post = (url: string, data?: any, headers?: any) => {
    return this.request({ url, data, headers, method: 'post' });
  };

  put = (url: string, data?: any) => {
    return this.request({ url, data, method: 'put' });
  };

  patch = (url: string, data?: any) => {
    return this.request({ url, data, method: 'patch' });
  };

  get = (url: string, params?: any) => {
    return this.request({ url, params, method: 'get' });
  };

  delete = (url: string, data?: any) => {
    return this.request({ url, data, method: 'delete' });
  };
}

export default HttpService;
