const { NextResponse } = require("next/server");
import { executeGraphQLOperation } from "../../../../services/graphql.service";
import { prisma } from "../../../../libs/prisma";

/* export async function GET(request, {params}) {
const { NextResponse } = require("next/server")
import {prisma} from "../../../../libs/prisma"

export async function GET(request, {params}) {
    const activo = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    console.log(activo)
    return NextResponse.json(activo)
}*/

export async function GET(request, { params }) {
  return executeGraphQLOperation(
    "query",
    `MyQuery {
            fabricanteById(id: "${params.id}") {
              nombre
              id
              descripcion
            }
          }`
  )
    .then((data) => {
      console.log(data.fabricanteById);
      return NextResponse.json(data.fabricanteById);
    })
    .catch((error) => console.error(error));
}

export async function PUT(request, {params}) {
    const data = await request.json()
    const activoUpdated = await prisma.task.update({
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
        const activo = await prisma.task.delete({
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
