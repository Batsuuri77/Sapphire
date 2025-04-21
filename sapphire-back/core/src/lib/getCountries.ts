import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);

export const getCountryList = () => {
  const countryNames = countries.getNames("en", { select: "official" });

  return Object.entries(countryNames).map(([code, name]) => ({
    code,
    name,
  }));
};
