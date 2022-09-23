export enum Language {
  ENGLISH_STUPEFIED = "en",
  ENGLISH = "en_US",

  SPANISH = "es",
}

export interface LanguageEntry {
  display: string;
  emoji: string;
  i18n: string;
  dayjs?: string;
  rtl?: boolean;
  cat?: "const" | "alt";
  verified?: boolean;
  incomplete?: boolean;
}

export const Languages: { [key in Language]: LanguageEntry } = {
  en: {
    display: "English (Traditional)",
    emoji: "🇬🇧",
    i18n: "en",
    dayjs: "en-gb",
  },
  en_US: {
    display: "English (Simplified)",
    emoji: "🇺🇸",
    i18n: "en_US",
    dayjs: "en",
  },

  es: { display: "Español", emoji: "🇪🇸", i18n: "es" },
};
