"use server";

import { baseFetch } from "@/lib/helpers";
import { CreateTransactionsArgs } from "./types";

export async function createTransaction(payload: CreateTransactionsArgs) {
  await baseFetch("/transactions/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}
