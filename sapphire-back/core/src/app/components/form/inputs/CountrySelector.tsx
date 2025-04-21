"use client";

import React, { useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCountryList } from "@/lib/getCountries";
import { CountrySelectorProps } from "@/types/formInputs";

const CountrySelector: React.FC<CountrySelectorProps> = ({
  label,
  labelClassname,
}) => {
  const countries = useMemo(() => getCountryList(), []);

  return (
    <div className={`flex flex-col gap-1`}>
      <label
        className={`text-sm font-semibold text-gray-700 ${labelClassname}`}
      >
        {label}
      </label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              {country.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CountrySelector;
