"use server";

import { Request } from "@/lib/api/requests/type";
import { baseFetch } from "@/lib/helpers";
import { revalidatePath, revalidateTag } from "next/cache";
import { createTransaction } from "../transactions";
import { getRequests } from "@/lib/api/requests/api";

export async function executeRequest(requestId: string) {
  const request = (await getRequests())?.find(({ id }) => id === requestId);

  if (!request) {
    console.error(`Request with ${requestId} doesn't exist!`);
    return;
  }

  await createTransaction({ requestId });

  revalidatePath("/dashboard");
  revalidateTag("transactions");

  return true;
}

export async function updateRequest(
  requestId: string,
  payload: Partial<Request>
) {
  await baseFetch(`/requests/update/${requestId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  revalidateTag("requests");
}

export async function createRequest(
  payload: Pick<Request, "description" | "price">
): Promise<void> {
  await baseFetch(`/requests/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  revalidateTag("requests");
}
