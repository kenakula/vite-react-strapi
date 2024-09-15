interface IQueryErrorData {
  data: null;
  status: number;
  error: {
    details: unknown;
    message: string;
    name: string;
    status: number;
  }
}

export interface IQueryError {
  data: IQueryErrorData;
  status: number;
}
