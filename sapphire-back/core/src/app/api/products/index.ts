import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";
import Product, { IProduct } from "@/models/Catalog/Product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();

  if (req.method === "GET") {
    try {
      const products: IProduct[] = await Product.find().populate(
        "category subCategory materials design sizeChart"
      );
      return res.status(200).json(products);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error fetching products", error });
    }
  }

  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
