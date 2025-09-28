import type { CourseStatus } from "@prisma/client";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "userId is required" },
        { status: 400 },
      );
    }

    const courses = await prisma.course.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json({ courses }, { status: 200 });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Error fetching courses:", errorMessage);
    return NextResponse.json(
      { error: `Internal Server Error: ${errorMessage}` },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      userId: string;
      name: string;
      semester: string;
      status: string;
      grade?: number;
    };

    const { userId, name, semester, status, grade } = body;

    if (!userId || !name || !status || !semester) {
      console.error("Missing fields:", { userId, name, semester, status });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const course = await prisma.course.create({
      data: {
        userId,
        semester,
        name,
        status: status as CourseStatus,
        grade: grade ? parseFloat(String(grade)) : null,
      },
    });

    return NextResponse.json({ course }, { status: 201 });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Error creating course:", errorMessage, error);
    return NextResponse.json(
      { error: `Internal Server Error: ${errorMessage}` },
      { status: 500 },
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const body = (await req.json()) as {
      courseId: string;
      status?: string;
      grade?: number;
    };
    const { courseId, status, grade } = body;

    if (!courseId) {
      return NextResponse.json(
        { error: "courseId is required" },
        { status: 400 },
      );
    }

    if (!status && grade === undefined) {
      return NextResponse.json(
        { error: "No update parameters provided" },
        { status: 400 },
      );
    }

    const updateData: { status?: CourseStatus; grade?: number | null } = {};

    if (status) {
      updateData.status = status as CourseStatus;
    }

    if (grade !== undefined) {
      updateData.grade = grade !== null ? parseFloat(String(grade)) : null;
    }

    const updatedCourse = await prisma.course.update({
      where: {
        id: courseId,
      },
      data: updateData,
    });

    return NextResponse.json({ course: updatedCourse }, { status: 200 });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Error updating course:", errorMessage);
    return NextResponse.json(
      { error: `Internal Server Error: ${errorMessage}` },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const courseId = url.searchParams.get("courseId");

    if (!courseId) {
      return NextResponse.json(
        { error: "courseId is required" },
        { status: 400 },
      );
    }

    await prisma.course.delete({
      where: {
        id: courseId,
      },
    });

    return NextResponse.json(
      { message: "Course deleted successfully" },
      { status: 200 },
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Error deleting course:", errorMessage);
    return NextResponse.json(
      { error: `Internal Server Error: ${errorMessage}` },
      { status: 500 },
    );
  }
}
