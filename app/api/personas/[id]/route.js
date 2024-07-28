const { NextResponse } = require("next/server")
import {prisma} from "../../../../libs/prisma"

export async function GET(request, {params}) {
    const activo = await prisma.persona.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    console.log(activo)
    return NextResponse.json(activo)
}

export async function PUT(request, {params}) {
    const data = await request.json()
    const activoUpdated = await prisma.persona.update({
        where: {
            id: Number(params.id)
        },
        data: data
    })
    console.log(activoUpdated)
   return NextResponse.json(activoUpdated)
}

export async function DELETE(request, {params}) {
    try {
        const activo = await prisma.persona.delete({
            where: {
                id: Number(params.id)
            }
        })
        console.log(activo)
        return NextResponse.json(activo)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}