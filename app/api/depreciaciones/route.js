import { prisma } from "../../../libs/prisma"

const { NextResponse } = require("next/server")

export async function GET() {
    const activos = await prisma.depreciacion.findMany()
    console.log(activos)
    return NextResponse.json(activos)
}

export async function POST(request) {
    const {nombre, descripcion} = await request.json()
    const newActivo = await prisma.depreciacion.create({
        data: {
            "nombre": nombre,
            "descripcion": descripcion
        }
    })
    console.log(newActivo)
    return NextResponse.json(newActivo)
}