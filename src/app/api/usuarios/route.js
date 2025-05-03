import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const result = await conn.query("SELECT * FROM usuarios");
  if (result.length < 0) {
    return NextResponse.json({ message: "No hay usuario registrados" });
  }
  return NextResponse.json(result);
}

export async function POST(request, res) {
  try {
    const { Nombre, Email, Password, Rol } = await request.json();
    const result = await conn.query("INSERT INTO usuarios SET ?", {
      Nombre,
      Email,
      Password,
      Rol,
    });

    return NextResponse.json({
      Nombre,
      Email,
      Password,
      Rol,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
