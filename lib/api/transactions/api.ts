import { baseFetch } from "@/lib/helpers";
import { Transaction } from "./types";

export async function getTransactions(): Promise<Transaction[] | null> {
  try {
    const data = await baseFetch("/transactions", {
      next: { tags: ["transactions"] },
    });

    /** Checkig, does transactions entity exists or not */
    const jsonData = await data.json();
    return Array.isArray(jsonData) ? jsonData : [];
  } catch (err) {
    console.error("Err:", err);

    return null;
  }
}

export async function getTransactionById(
  transactionId: number
): Promise<Transaction | null> {
  try {
    const data = await baseFetch(`transactions/${transactionId}`);

    return data.json();
  } catch (err) {
    console.error("Err:", err);

    return null;
  }
}
