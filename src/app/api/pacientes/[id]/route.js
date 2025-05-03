import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const result = await conn.query("SELECT * FROM pacientes WHERE ID = ?", [
      params.id,
    ]);
    if (result.length <= 0) {
      return NextResponse.json(
        {
          message: "No se encontró el paciente",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(result[0]);
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

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    const result = await conn.query("UPDATE pacientes SET ? WHERE ID = ?", [
      data,
      params.id,
    ]);
    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "Paciente no encontrado",
        },
        {
          status: 404,
        }
      );
    }
    const updatedPatient = await conn.query("SELECT * FROM pacientes WHERE ID = ?", [
      params.id,
    ]);
    return NextResponse.json(updatedPatient[0]);
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

export async function DELETE(request, { params }) {
  try {
    const result = await conn.query("DELETE FROM pacientes WHERE ID = ?", [
      params.id,
    ]);
    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "Paciente no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    return new Response(null, { status: 204 });
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
