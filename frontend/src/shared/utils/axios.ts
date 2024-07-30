import axios, { AxiosError, AxiosInstance, AxiosResponse, CreateAxiosDefaults } from 'axios';

const AXIOS_OPTIONS: CreateAxiosDefaults = {
  baseURL: '/api',
  timeout: 10000,
};

class Axios {
  public readonly _instance: AxiosInstance;

  constructor() {
    this._instance = axios.create(AXIOS_OPTIONS);
    this.addInterceptors();
  }

  get inst(): AxiosInstance {
    return this._instance;
  }

  private handleSuccess(response: AxiosResponse): AxiosResponse {
    return response;
  }

  private handleError(error: AxiosError): Promise<AxiosError> {
    return Promise.reject(error);
  }

  private addInterceptors(): void {
    this._instance.interceptors.response.use(this.handleSuccess, this.handleError);
  }
}

export const axiosInstance = new Axios();
