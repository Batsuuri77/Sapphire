"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectorProps } from "@/types/formInputs";

const Selector: React.FC<SelectorProps> = ({
  label,
  labelClassname,
  selectedValue,
  placeholder,
  onChange,
  options,
  error,
}) => {
  return (
    <div className={`flex flex-col gap-1`}>
      <label
        className={`text-sm font-semibold text-gray-700 ${labelClassname}`}
      >
        {label}
      </label>
      <Select value={selectedValue} onValueChange={onChange}>
        <SelectTrigger
          className={`w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
            error ? "border-red-500" : ""
          }`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default Selector;
