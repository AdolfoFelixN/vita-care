import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const result = await conn.query("SELECT * FROM usuarios WHERE ID = ?", [
      params.id,
    ]);
    if (result.length >= 0) {
      return NextResponse.json(
        {
          message: "No se encontró el usuario",
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

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const result = await conn.query("UPDATE usuarios SET ? WHERE ID = ?", [
      data,
      params.id,
    ]);
    console.log(result);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "Usuario no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    const updatedUser = await conn.query("SELECT * FROM usuarios WHERE ID = ?", [
      params.id,
    ]);
    return NextResponse.json(updatedUser[0]);
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
    const result = await conn.query("DELETE FROM usuarios WHERE ID = ?", [
      params.id,
    ]);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "Usuario no encontrado",
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
