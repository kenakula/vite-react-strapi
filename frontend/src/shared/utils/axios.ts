import axiosLib, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const axiosInstance = axiosLib.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

const logOnDev = (message: string): void => {
  if (import.meta.env.MODE === 'development') {
    console.log(message);
  }
};

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const { method, url } = config;
  // Set Headers Here
  // Check Authentication Here
  // Set Loading Start Here
  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`);

  if (method === 'get') {
    config.timeout = 15000;
  }
  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  const { method, url } = response.config;
  const { status } = response;
  // Set Loading End Here
  // Handle Response Data Here
  // Error Handling When Return Success with Error Code Here
  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);

  return response;
};

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axiosLib.isAxiosError(error)) {
    const { message } = error;
    const { method, url } = error.config as AxiosRequestConfig;
    const { statusText, status } = error.response as AxiosResponse ?? {};

    logOnDev(
      `🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status}; ${statusText}; ${message}`
    );

  } else {
    logOnDev(`🚨 [API] | Unexpected Error ${error.message}`);
  }

  return Promise.reject(error);
};

const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(onRequest, onErrorResponse);
  instance.interceptors.response.use(onResponse, onErrorResponse);

  return instance;
};

export const getAxiosError = <T extends object>(error: unknown): T | null => {
  if (axiosLib.isAxiosError<T>(error)) {
    return error.response?.data ?? null;
  }

  return null;
};

export const api = setupInterceptors(axiosInstance);
