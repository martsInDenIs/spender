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
    options
  );
};
