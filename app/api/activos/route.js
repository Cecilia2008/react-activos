import { prisma } from "../../../libs/prisma"

const { NextResponse } = require("next/server")

export async function GET() {
    const activos = await prisma.activos.findMany()
    console.log(activos)
    return NextResponse.json(activos)
}

export async function POST(request) {
    const {nombre, serial, estado, fechaCompra, valorCompra} = await request.json()
    const newActivo = await prisma.activos.create({
        data: {
            "nombre": nombre,
            "serial": serial,
            "fechaCompra": fechaCompra,
            "valorCompra": valorCompra,
            "estado": estado
        }
    })
    console.log(newActivo)
    return NextResponse.json(newActivo)
}