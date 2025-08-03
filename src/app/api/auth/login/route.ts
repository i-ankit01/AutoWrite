import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json(
      {
        message: "user not found",
      },
      { status: 404 }
    );
  }
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return NextResponse.json(
      {
        message: "invalid credentials",
      },
      { status: 402 }
    );
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "3d",
  });

  const response =  NextResponse.json({
    message: "User logged in successfully",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });

  response.cookies.set('token', token, {
  httpOnly: true,  // if false then allow access from document.cookie (for client side) although less secure
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  path: '/', // make cookie accessible at all the routess
  maxAge: 60 * 60 * 24 * 3, // 3 days
})

  return response;
}

export async function GET(req: NextRequest) {
  return NextResponse.json({
    env: process.env.JWT_SECRET,
  });
}
