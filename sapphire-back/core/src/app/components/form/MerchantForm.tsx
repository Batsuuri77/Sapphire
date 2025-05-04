import React from "react";
import ImageInput from "./inputs/ImageInput";
import FormInput from "./inputs/FormInput";
import TextAreaInput from "./inputs/TextAreaInput";
import { MerchantFormProps } from "@/types/formInputs";
import Selector from "./inputs/Selector";

const MerchantForm: React.FC<MerchantFormProps> = ({
  merchformLabel,
  merchformContainerClassName,
  merchformLabelClassName,
  merchformdata,
  setMerchFormData,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMerchFormData({ ...merchformdata, [name]: value });
  };
  //console.log(merchformdata, "merchformdata");

  const [selected, setSelected] = React.useState<string>("");

  return (
    <div
      className={`flex flex-col gap-4 max-w-full justify-center items-start ${merchformContainerClassName}`}
    >
      <h3
        className={`text-lg font-semibold text-gray-800 mb-4 ${merchformLabelClassName}`}
      >
        {merchformLabel}
      </h3>
      <ImageInput
        label={""}
        url={""}
        alt={""}
        images={[]}
        onChange={(urls) =>
          setMerchFormData({ ...merchformdata, logoImage: urls })
        }
      />
      <form className="grid grid-cols-2 gap-4 w-full">
        <FormInput
          label={"Shop name"}
          required={true}
          type="text"
          name={"merchantName"}
          value={merchformdata.merchantName}
          onChange={handleChange}
        />
        <FormInput
          label={"Shop domain"}
          required={true}
          type="url"
          name={"merchantDomain"}
          value={merchformdata.merchantDomain}
          onChange={handleChange}
        />
        <Selector
          label={"Shop category"}
          options={[
            { label: "Clothing", value: "clothing" },
            { label: "Home Decor", value: "home_decor" },
          ]}
          selectedValue={selected}
          onChange={(val) => {
            setSelected(val);
          }}
          placeholder={"Select a shop category"}
        ></Selector>
        <TextAreaInput
          label={"Shop bio"}
          name={"merchantBio"}
          required={false}
          value={merchformdata.merchantBio}
          onChange={(e) => {
            handleChange(e);
          }}
        ></TextAreaInput>
        <FormInput
          label={"Shop address"}
          required={true}
          type="text"
          name={"merchantAddress"}
          value={merchformdata.merchantAddress}
          onChange={handleChange}
        />
        <FormInput
          label={"Shop phone number"}
          required={true}
          type="number"
          name={"merchantPhoneNumber"}
          value={merchformdata.merchantPhoneNumber}
          onChange={handleChange}
        />
        <TextAreaInput
          label={"Shop description"}
          required={false}
          name={"merchantDescription"}
          value={merchformdata.merchantDescription || ""}
          onChange={(e) => {
            handleChange(e);
          }}
        ></TextAreaInput>
      </form>
    </div>
  );
};

export default MerchantForm;
