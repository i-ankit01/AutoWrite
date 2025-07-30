import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma"; // import prisma client instance
// this is done to avoid creating multiple instances of prisma client during hot reload in development mode

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();
  const hashPass = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: { name, email, password: hashPass },
    });
    return NextResponse.json({
      userCreated: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error });
  }
}
