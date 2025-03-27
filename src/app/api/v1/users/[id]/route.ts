import supabase from "@/app/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const { data, error } = await supabase
      .from("User")
      .select()
      .eq("id", id)
      .single();

    if (error) throw new Error(error.message);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
