import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    taxId: { type: String, unique: true, required: true },
    phoneNumber: { type: String },
    mobileNumber: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    strAddress: { type: String },
    zipCode: { type: String },
    merchants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Merchant" }],
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: "Admin" }],
  },
  { timestamps: true }
);

export default mongoose.models.Company ||
  mongoose.model("Company", CompanySchema);
export type Company = mongoose.InferSchemaType<typeof CompanySchema>;
export type CompanyDocument = mongoose.Document<Company>;
export type CompanyModel = mongoose.Model<CompanyDocument> & {
  findById: (id: string) => Promise<CompanyDocument | null>;
  findByEmail: (email: string) => Promise<CompanyDocument | null>;
  findByTaxId: (taxId: string) => Promise<CompanyDocument | null>;
  findByPhoneNumber: (phoneNumber: string) => Promise<CompanyDocument | null>;
};
