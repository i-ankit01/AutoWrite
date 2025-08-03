import jwt from "jsonwebtoken";
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
    const response = NextResponse.json({
      userCreated: user,
    });
    const token = jwt.sign(user.id, process.env.JWT_SECRET!, {
      expiresIn: "3d",
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 3,
    });

    return response;

  } catch (error: any) {
    return NextResponse.json({ error });
  }
}
