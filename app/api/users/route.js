import { NextResponse } from "next/server";
import usersData from "@/data/data.json";

export function GET() {
  return NextResponse.json(usersData);
}
