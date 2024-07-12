export interface Request {
  id: string;
  description: string;
  price: number;

  allowed: boolean;
  decided: boolean;
  executed: boolean;
}

export interface GetRequestsParams {
  conditions?: string;
}
