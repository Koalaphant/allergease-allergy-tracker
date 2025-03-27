import { NextResponse } from "next/server";
import supabase from "@/app/lib/supabase";
import { Role } from "@prisma/client";

export async function GET() {
  const { data, error } = await supabase.from("User").select();

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  if (data && data.length > 0) {
    console.log(data[0]);
  } else {
    console.log("No data found");
  }

  return NextResponse.json({ users: data }, { status: 200 });
}

type userType = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  profilePicture?: string;
  role: Role;
};

export async function POST(request: Request) {
  try {
    const userData: userType = await request.json();

    const { data, error } = await supabase
      .from("User")
      .insert({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        dateOfBirth: userData.dateOfBirth,
        profilePicture: userData.profilePicture,
        role: userData.role,
      })
      .select();

    if (error?.code === "23505") {
      return NextResponse.json(
        {
          error: { code: error.code, message: error.details },
        },
        { status: 409 }
      );
    }

    if (error) {
      return NextResponse.json({ message: error }, { status: 500 });
    }

    return NextResponse.json(
      { message: "User created successfully", user: data[0] },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
