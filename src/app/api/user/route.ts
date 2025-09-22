import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, pin, newUser } = await req.json();

    if (!email || !pin) {
      return NextResponse.json(
        { error: "Email and PIN are required" },
        { status: 400 },
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (newUser) {
      if (existingUser) {
        return NextResponse.json(
          { error: "User already exists" },
          { status: 400 },
        );
      }

      const newUserRecord = await prisma.user.create({
        data: { email, pin },
      });

      return NextResponse.json({ user: newUserRecord }, { status: 201 });
    }

    if (!existingUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 },
      );
    }

    if (existingUser.pin !== pin) {
      return NextResponse.json(
        { error: "Invalid PIN" },
        { status: 401 },
      );
    }

    return NextResponse.json({ user: existingUser }, { status: 200 });
  } catch (error) {
    console.error("Error during user authentication:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
