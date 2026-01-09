import { NextResponse } from "next/server";
import { readingdata } from "../../../../../config/db";

export async function GET(req:Request , { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;

  const data = await readingdata(
    "SELECT * FROM products WHERE pname = ?",
    [name]
  );

  return NextResponse.json(data[0]);
}
