"use server";

import { Request } from "@/lib/api/requests/type";
import { baseFetch } from "@/lib/helpers";
import { revalidatePath, revalidateTag } from "next/cache";
import { createTransaction } from "../transactions";
import { getRequests } from "@/lib/api/requests/api";

export async function executeRequest(requestId: string) {
  const request = (await getRequests()).find(({ id }) => id === requestId);

  if (!request) {
    console.error(`Request with ${requestId} doesn't exist!`);
    return;
  }

  /** TODO: Check types that json-server convert payload (with no reason payload in string, id in number)  */
  await createTransaction({
    description: request.description,
    price: request.price,
  });

  await updateRequest(requestId, { executed: true });

  revalidatePath('/dashboard');
  revalidateTag('transactions');

  return true;
}

export async function updateRequest(
  requestId: string,
  payload: Partial<Request>
) {
  const result = await baseFetch(`/requests/${requestId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  revalidateTag("requests");

  return result.json();
}

export async function createRequest(
  payload: Pick<Request, "description" | "price">
): Promise<Request> {
  const result = await baseFetch(`/requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      allowed: false,
      decided: false,
      executed: false,
    }),
  });

  revalidateTag("requests");

  return result.json();
}
