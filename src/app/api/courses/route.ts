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
  } catch (error: any) {
    console.error("Error fetching courses:", error.message);
    return NextResponse.json(
      { error: `Internal Server Error: ${error.message}` },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { userId, name, status, grade } = body;

    if (!userId || !name || !status) {
      console.error("Missing fields:", { userId, name, status });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const validStatuses = ["open", "in_progress", "done"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        {
          error:
            "Invalid status value. Must be one of: open, in_progress, done",
        },
        { status: 400 },
      );
    }

    const course = await prisma.course.create({
      data: {
        userId,
        name,
        status: status as CourseStatus,
        grade: grade ? parseFloat(String(grade)) : null,
      },
    });

    return NextResponse.json({ course }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating course:", error.message, error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error.message}` },
      { status: 500 },
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { courseId, status, grade } = body;

    if (!courseId) {
      return NextResponse.json(
        { error: "courseId is required" },
        { status: 400 },
      );
    }

    // Check if there's anything to update
    if (!status && grade === undefined) {
      return NextResponse.json(
        { error: "No update parameters provided" },
        { status: 400 },
      );
    }

    // Validate status if provided
    if (status) {
      const validStatuses = ["open", "in_progress", "done"];
      if (!validStatuses.includes(status)) {
        return NextResponse.json(
          {
            error:
              "Invalid status value. Must be one of: open, in_progress, done",
          },
          { status: 400 },
        );
      }
    }

    // Build update data
    const updateData: { status?: CourseStatus; grade?: number | null } = {};

    if (status) {
      updateData.status = status as CourseStatus;
    }

    if (grade !== undefined) {
      updateData.grade = grade !== null ? parseFloat(String(grade)) : null;
    }

    // Update the course
    const updatedCourse = await prisma.course.update({
      where: {
        id: courseId,
      },
      data: updateData,
    });

    return NextResponse.json({ course: updatedCourse }, { status: 200 });
  } catch (error: any) {
    console.error("Error updating course:", error.message);
    return NextResponse.json(
      { error: `Internal Server Error: ${error.message}` },
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
  } catch (error: any) {
    console.error("Error deleting course:", error.message);
    return NextResponse.json(
      { error: `Internal Server Error: ${error.message}` },
      { status: 500 },
    );
  }
}
