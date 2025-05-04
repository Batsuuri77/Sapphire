export interface InputField {
  label: string; // Label for the input field
  type: string; // Type of the input field (e.g., text, email, password)
  name: string; // Name attribute for the input field
  value: string; // Value of the input field
  placeholder?: string; // Placeholder text for the input field
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change event handler
  error?: string; // Optional error message
  labelClassname?: string; // Optional additional class names for the label
  inputClassname?: string;
  required: boolean; // Optional flag to indicate if the field is required
}

export interface ImageInputField {
  images: string[]; // Array of image URLs
  label: string; // Label for the input field
  additionalLabelClassName?: string; // Optional additional class names for the label
  alt?: string; // Optional text for the input field
  url?: string; // URL for the input field
  onChange: (newImageUrls: string[]) => void; // Change event handler
}

export interface TextAreaInputField {
  label: string; // Label for the text area input field
  placeholder?: string; // Placeholder text for the text area input field
  name: string; // Name attribute for the text area input field
  value: string; // Value of the text area input field
  rows?: number; // Number of rows for the text area input field
  cols?: number; // Number of columns for the text area input field
  required?: boolean; // Optional flag to indicate if the field is required
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Change event handler
  error?: string; // Optional error message
  labelClassname?: string; // Optional additional class names for the label
  areaClassname?: string; // Optional additional class names for the text area input field
}

export interface CountrySelectorProps {
  labelClassname?: string;
  name: string; // Name attribute for the country selector
  label: string;
  value: string; // Selected country code
  onChange: (value: string) => void; // Change event handler
}

export interface CompanyFormData {
  name: string;
  email: string;
  taxId: string;
  phoneNumber: string;
  mobileNumber?: string | undefined;
  country: string;
  state: string;
  city: string;
  strAddress: string;
  zipCode: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CompanyFormProps {
  companyformLabel: string; // Title for the form
  companyformContainerClassName?: string; // Optional class names for the form container
  companyformLabelClassName?: string; // Optional class names for the form label
  companyformdata: CompanyFormData; // Data for the form
  setCompanyFormData: (data: CompanyFormData) => void; // Function to set form data
}

export interface MerchFormData {
  logoImage: string[]; // URL for the profile image
  merchantName: string;
  merchantDomain: string;
  merchantType: string;
  merchantBio: string;
  merchantAddress: string;
  merchantPhoneNumber: string;
  merchantDescription?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MerchantFormProps {
  merchformLabel: string; // Title for the form
  merchformContainerClassName?: string; // Optional class names for the form container
  merchformLabelClassName?: string; // Optional class names for the form label
  merchformdata: MerchFormData; // Data for the form
  setMerchFormData: (data: MerchFormData) => void; // Function to set form data
}

export interface AdminFormData {
  profileImage?: string[]; // URL for the profile image
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  phoneNumber: string;
  mobileNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminFormProps {
  adminformLabel: string; // Title for the form
  adminformContainerClassName?: string; // Optional class names for the form container
  adminformLabelClassName?: string; // Optional class names for the form label
  adminformdata: AdminFormData; // Data for the form
  setAdminFormData: (data: AdminFormData) => void; // Function to set form data
}

export interface SelectorProps {
  label: string; // Label for the selector
  labelClassname?: string; // Optional class names for the label
  placeholder?: string; // Placeholder text for the selector
  options: Array<{ value: string; label: string }>; // Options for the selector
  selectedValue: string; // Selected value of the selector
  onChange: (value: string) => void; // Change event handler
  error?: string; // Optional error message
}
