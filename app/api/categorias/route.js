import { prisma } from "../../../libs/prisma"

const { NextResponse } = require("next/server")

export async function GET() {
    const activos = await prisma.categorias.findMany()
    console.log(activos)
    return NextResponse.json(activos)
}

export async function POST(request) {
    const {nombre, descripcion} = await request.json()
    const newActivo = await prisma.categorias.create({
        data: {
            "nombre": nombre,
            "descripcion": descripcion
        }
    })
    console.log(newActivo)
    return NextResponse.json(newActivo)
}