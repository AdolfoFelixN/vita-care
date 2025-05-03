import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const result = await conn.query("SELECT * FROM citas");
    if (result.length === 0) {
      return NextResponse.json(
        {
          message: "No se encontraron citas",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(result);
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
  try {
    const { Paciente_ID, Medico_ID, FechaHora, Estado, Motivo } =
      await req.json();
    const result = await conn.query("INSERT INTO citas SET ?", {
      Paciente_ID,
      Medico_ID,
      FechaHora,
      Estado,
      Motivo,
    });
    console.log(result);
    return NextResponse.json({
      Paciente_ID,
      Medico_ID,
      FechaHora,
      Estado,
      Motivo,
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
