import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const result = await conn.query("SELECT * FROM Recetas")
    if(result.length === 0){
        return NextResponse.json(
            {
                message: "No se encontraron recetas",
            },
            {
                status: 404,
            }
        )
    }
    return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        )
    }
}

export async function POST(req, res) {
    try {
        const {Consulta_ID, Contenido} = await req.json()
    const result = await conn.query("INSERT INTO Recetas SET ?",{
        Consulta_ID,
        Contenido,
    })

    return NextResponse.json({
        Consulta_ID,
        Contenido,
    })
    } catch (error) {
      return NextResponse.json(
        {
            message: error.message,
        },
        {
            status: 500,
        }
      )  
    }
}