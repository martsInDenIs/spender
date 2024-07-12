import getUnicodeFlagIcon from "country-flag-icons/unicode";

export const supportedLanguages = ["en", "ua"] as const;
export type SupportedLanguages = (typeof supportedLanguages)[number];

export const languageMap: Record<SupportedLanguages, string> = {
  en: getUnicodeFlagIcon("GB"),
  ua: getUnicodeFlagIcon("UA"),
};
