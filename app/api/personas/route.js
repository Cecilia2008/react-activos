import { prisma } from "../../../libs/prisma"

const { NextResponse } = require("next/server")

export async function GET() {
    const activos = await prisma.persona.findMany()
    console.log(activos)
    return NextResponse.json(activos)
}

export async function POST(request) {
    const {nombre, email, telefono, ci} = await request.json()
    const newActivo = await prisma.persona.create({
        data: {
            "nombre": nombre,
            "email": email,
            "telefono": telefono,
            "ci": ci,
        }
    })
    console.log(newActivo)
    return NextResponse.json(newActivo)
}