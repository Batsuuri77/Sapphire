import ImageInput from "./inputs/ImageInput";
import FormInput from "./inputs/FormInput";
import { AdminFormProps } from "@/types/formInputs";

const AdminForm: React.FC<AdminFormProps> = ({
  adminformLabel,
  adminformContainerClassName,
  adminformLabelClassName,
  adminformdata,
  setAdminFormData,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAdminFormData({ ...adminformdata, [name]: value });
  };
  console.log(adminformdata, "adminformdata");
  return (
    <div
      className={`flex flex-col gap-4 max-w-full justify-center items-start ${adminformContainerClassName}`}
    >
      <h3
        className={`text-lg font-semibold text-gray-800 mb-4 ${adminformLabelClassName}`}
      >
        {adminformLabel}
      </h3>
      <ImageInput label={"Merchant logo"} url={""} images={[]} />
      <form className="grid grid-cols-2 gap-4 w-full">
        <FormInput
          label={"First name"}
          type="text"
          name={"firstName"}
          value={adminformdata.firstName}
          required={true}
          onChange={handleChange}
        />
        <FormInput
          label={"Last name"}
          placeholder={""}
          type="text"
          name={"lastName"}
          value={adminformdata.lastName}
          required={true}
          onChange={handleChange}
        />
        <FormInput
          label={"Email"}
          type="email"
          name={"email"}
          value={adminformdata.email}
          required={true}
          onChange={handleChange}
        />
        <FormInput
          label={"PhoneNumber"}
          type="number"
          name={"phoneNumber"}
          required={true}
          value={adminformdata.phoneNumber}
          onChange={handleChange}
        />
        <FormInput
          label={"MobileNumber"}
          type="number"
          name={"mobileNumber"}
          required={false}
          value={adminformdata.mobileNumber || ""}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default AdminForm;
