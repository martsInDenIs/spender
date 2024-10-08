import { baseFetch, formatParams } from "@/lib/helpers";
import { GetRequestsParams, Request } from "./type";

export async function getRequests(
  params?: GetRequestsParams
): Promise<Request[] | null> {
  try {
    const requests = await baseFetch(`/requests${formatParams(params)}`, {
      next: { tags: ["requests"] },
    });

    /** Checking, does the entity exists */
    const jsonRequests = await requests.json();
    return Array.isArray(jsonRequests) ? jsonRequests : [];
  } catch (err) {
    console.error(err, err);

    return null;
  }
}
