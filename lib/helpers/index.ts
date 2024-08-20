import { cookies } from "next/headers";

export const baseFetch = (
  path: Parameters<typeof fetch>[0],
  options?: RequestInit
): Promise<Response> => {
  const baseApi =
    typeof window === "undefined"
      ? process.env.BASE_API_URL
      : process.env.NEXT_PUBLIC_BASE_API_URL;

  return fetch(
    `${baseApi}${path.toString().startsWith("/") ? path : `/${path}`}`,
    {
      ...options,
      headers: {
        ...options?.headers,
        Cookie: cookies().toString(),
      },
    }
  );
};

export function formatParams(params: Record<string, unknown> | undefined) {
  const paramsString = params
    ? Object.entries(params)
        .map(([key, value]) => {
          if (value === undefined || value === null || value === "") {
            return "";
          }

          if (Array.isArray(value)) {
            return value.map((el) => `${key}[]=${el}`).join("&");
          }

          return `${key}=${value}`;
        })
        .join("&")
    : "";

  return paramsString.length ? `?${paramsString}` : "";
}
