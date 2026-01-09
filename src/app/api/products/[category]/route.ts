import { NextResponse } from "next/server";
import { readingdata } from "../../../../../config/db";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;

  const data = await readingdata(
    "SELECT * FROM products WHERE category = ?",
    [category]
  );

  return NextResponse.json(data[0]);
}
