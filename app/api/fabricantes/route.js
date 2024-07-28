import { prisma } from "../../../libs/prisma";
import { executeGraphQLOperation } from "../../../services/graphql.service";

const { NextResponse } = require("next/server");

/* export async function GET() {
    const activos = await prisma.task.findMany()
    console.log(activos)
    return NextResponse.json(activos)
} */

export async function GET() {
  return executeGraphQLOperation(
    "query",
    `MyQuery {
        allFabricantes {
          id
          nombre
          descripcion
        }
      }`
  )
    .then((data) => {
      console.log(data.allFabricantes);
      return NextResponse.json(data.allFabricantes);
    })
    .catch((error) => console.error(error));
}

/* export async function POST(request) {
  const { nombre, descripcion } = await request.json();
  const newActivo = await prisma.task.create({
    data: {
      nombre: nombre,
      descripcion: descripcion,
    },
  });
  console.log(newActivo);
  return NextResponse.json(newActivo);
} */

export async function POST(request) {
  const { nombre, descripcion, id} = await request.json();
  return executeGraphQLOperation(
    "mutation",
    `MyMutation {
        addFabricante(fabricante: {id: "${id}"  nombre: "${nombre}", descripcion: "${descripcion}"}) {
          id
          nombre
          descripcion
        }
      }`
  )
    .then((data) => {
      console.log(data.addFabricante);
      return NextResponse.json(data.addFabricante);
    })
    .catch((error) => console.error(error));
}
