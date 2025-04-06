import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

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
      // Falls der Nutzer schon existiert, Fehlermeldung zurückgeben
      if (existingUser) {
        return NextResponse.json(
          { error: "User existiert bereits" },
          { status: 400 },
        );
      }

      // Falls der Nutzer nicht existiert, neuen Nutzer anlegen
      const newUser = await prisma.user.create({
        data: { email },
      });

      return NextResponse.json({ user: newUser }, { status: 201 });
    }

    // Falls `newUser` false ist, nur prüfen, ob User existiert
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
