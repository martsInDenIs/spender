import { Request } from "./type";

export async function getRequests(): Promise<Request[]> {
  const response = await fetch("http://localhost:3000/requests");

  return await response.json();
}
