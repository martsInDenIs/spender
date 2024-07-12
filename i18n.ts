import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { supportedLanguages } from "./constants";

const DEFAULT_LANGUAGE = "en";

export default getRequestConfig(async () => {
  const language = cookies().get("lang");

  const locale =
    (language && supportedLanguages.find((item) => item === language?.value)) ??
    DEFAULT_LANGUAGE;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
