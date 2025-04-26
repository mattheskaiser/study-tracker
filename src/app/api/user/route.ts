import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, newUser } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email ist erforderlich" },
        { status: 400 },
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (newUser) {
      if (existingUser) {
        return NextResponse.json(
          { error: "User existiert bereits" },
          { status: 400 },
        );
      }

      const newUser = await prisma.user.create({
        data: { email },
      });

      return NextResponse.json({ user: newUser }, { status: 201 });
    }

    if (!existingUser) {
      return NextResponse.json(
        { error: "User nicht gefunden" },
        { status: 404 },
      );
    }

    return NextResponse.json({ user: existingUser }, { status: 200 });
  } catch (error) {
    console.error("Fehler beim User-Check:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 },
    );
  }
}
