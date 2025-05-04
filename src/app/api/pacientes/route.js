import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const result = await conn.query("SELECT * FROM pacientes");

    return NextResponse.json(result || []);
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

export async function POST(req, res) {
  const {
    Nombre,
    FechaNacimiento,
    Sexo,
    Telefono,
    Email,
    Direccion,
    Alergias,
  } = await req.json();
  const result = await conn.query("INSERT INTO pacientes SET ?", {
    Nombre,
    FechaNacimiento,
    Sexo,
    Telefono,
    Email,
    Direccion,
    Alergias,
  });
  console.log(result);
  return NextResponse.json({
    Nombre,
    FechaNacimiento,
    Sexo,
    Telefono,
    Email,
    Direccion,
    Alergias,
  });
}
