import mongoose from "mongoose";

const MerchantSchema = new mongoose.Schema(
  {
    logoImage: { type: [String] }, // Correctly define as an array of strings
    merchantName: { type: String },
    merchantDomain: { type: String, unique: true },
    merchantType: { type: String },
    merchantBio: { type: String },
    merchantAddress: { type: String },
    merchantPhoneNumber: { type: String },
    merchantDescription: { type: String },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: "Admin" }],
  },
  { timestamps: true }
);

export default mongoose.models.Merchant ||
  mongoose.model("Merchant", MerchantSchema);
export type Merchant = mongoose.InferSchemaType<typeof MerchantSchema>;
export type MerchantDocument = mongoose.Document<Merchant>;
export type MerchantModel = mongoose.Model<MerchantDocument> & {
  findById: (id: string) => Promise<MerchantDocument | null>;
  findByDomain: (domain: string) => Promise<MerchantDocument | null>;
  findByPhoneNumber: (phoneNumber: string) => Promise<MerchantDocument | null>;
};
