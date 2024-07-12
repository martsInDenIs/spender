"use server";

import { Transaction } from "@/lib/api/transactions/types";
import { baseFetch } from "@/lib/helpers";

export async function createTransaction(payload: Omit<Transaction, "id">) {
  const result = await baseFetch("/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return result.json();
}
