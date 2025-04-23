import React from "react";
import FormInput from "./inputs/FormInput";
import { CompanyFormProps } from "@/types/formInputs";
import CountrySelector from "./inputs/CountrySelector";

const CompanyForm: React.FC<CompanyFormProps> = ({
  companyformLabel,
  companyformContainerClassName,
  companyformLabelClassName,
  companyformdata,
  setCompanyFormData,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyFormData({ ...companyformdata, [name]: value });
  };
  // console.log(companyformdata, "companyformdata");
  return (
    <div
      className={`flex flex-col gap-4 max-w-full justify-center items-center ${companyformContainerClassName}`}
    >
      <h3
        className={`text-lg font-semibold text-gray-800 mb-4 ${companyformLabelClassName}`}
      >
        {companyformLabel}
      </h3>
      <form className="grid grid-cols-2 gap-4 w-full">
        <FormInput
          label={"Company name"}
          type="text"
          name={"name"}
          value={companyformdata.name}
          onChange={handleChange}
          required={true}
        />
        <FormInput
          label={"Email"}
          type="email"
          name={"email"}
          value={companyformdata.email}
          onChange={handleChange}
          required={true}
        />
        <FormInput
          label={"Tax ID"}
          type="text"
          name={"taxId"}
          value={companyformdata.taxId}
          onChange={handleChange}
          required={true}
        />
        <FormInput
          label={"Phone number"}
          type="number"
          name={"phoneNumber"}
          value={companyformdata.phoneNumber}
          onChange={handleChange}
          required={true}
        />
        <FormInput
          label={"Mobile number"}
          type="number"
          name={"mobileNumber"}
          value={companyformdata.mobileNumber || ""}
          onChange={handleChange}
          required={true}
        />
        <CountrySelector label={"Country"} />
        <FormInput
          label={"State or Province"}
          type="text"
          name={"state"}
          value={companyformdata.state}
          onChange={handleChange}
          required={true}
        />
        <FormInput
          label={"City"}
          type="text"
          name={"city"}
          value={companyformdata.city}
          onChange={handleChange}
          required={true}
        />
        <FormInput
          label={"Street address"}
          type="text"
          name={"strAddress"}
          value={companyformdata.strAddress}
          onChange={handleChange}
          required={true}
        />
        <FormInput
          label={"Zip code"}
          type="number"
          name={"zipCode"}
          value={companyformdata.zipCode}
          onChange={handleChange}
          required={true}
        />
      </form>
    </div>
  );
};

export default CompanyForm;
