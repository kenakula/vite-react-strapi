export interface IStrapiResponse<T> {
  data: T;
}

export interface IStrapiErrorModel {
  data: null;
  error: {
    details: object;
    message: string;
    name: string;
    status: number;
  }
}
