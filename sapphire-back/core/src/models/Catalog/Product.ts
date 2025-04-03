import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description?: string;
  price: number;
  category: mongoose.Types.ObjectId;
  subCategory: mongoose.Types.ObjectId;
  gender: "Men" | "Women" | "Unisex";
  manufacturedCountry: string;
  materials: mongoose.Types.ObjectId[];
  colors: string[];
  design: mongoose.Types.ObjectId;
  sizeChart: mongoose.Types.ObjectId;
  stock: Record<string, number>;
  images: string[];
  ratings: {
    average: number;
    count: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    subCategory: { type: Schema.Types.ObjectId, ref: "SubCategory" },
    gender: { type: String, enum: ["Men", "Women", "Unisex"] },
    manufacturedCountry: { type: String },
    materials: [{ type: Schema.Types.ObjectId, ref: "Material" }],
    colors: [{ type: String }],
    design: { type: Schema.Types.ObjectId, ref: "Design" },
    sizeChart: { type: Schema.Types.ObjectId, ref: "SizeChart" },
    stock: { type: Map, of: Number },
    images: [{ type: String }],
    ratings: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model<IProduct>("Product", ProductSchema);
