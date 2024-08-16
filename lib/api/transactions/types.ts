import { Request } from "../requests/type";

export interface Transaction {
  id: number;
  date: Date;
  request?: Request;
}

export enum TransactionRelations {
  REQUEST = "request",
}

export type GetTransactionParams = {
  conditions?: Record<string, unknown>;
  relations?: TransactionRelations[];
};
