export interface Request {
  id: string;
  description: string;
  price: string;

  allowed: boolean;
  decided: boolean;
  executed: boolean;
}
