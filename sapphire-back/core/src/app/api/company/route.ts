import { connectToDatabase } from "@/lib/mongodb";
import Company from "@/models/User/Company";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectToDatabase();
  const data = await req.json();
  try {
    const company = await Company.create(data);
    return Response.json(company, { status: 201 });
  } catch (err) {
    return Response.json(
      { error: "Failed to create company", details: err },
      { status: 400 }
    );
  }
}

export async function GET() {
  await connectToDatabase();
  const companies = await Company.find();
  return NextResponse.json(companies);
}
