import { Transaction } from "./types";

export async function getTransactions(): Promise<Transaction[]> {
  const data = await fetch("http://localhost:3000/transactions", {
    cache: "force-cache",
  });

  return await data.json();
}

export async function getTransactionById(transactionId: number): Promise<Transaction> {
  const data = await fetch(
    `http://localhost:3000/transactions/${transactionId}`,
    {
      cache: "force-cache",
    }
  );

  return data.json();
}
