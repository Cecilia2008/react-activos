import { gql } from "@apollo/client";

export const ADD_FABRICANTE_D = gql`
mutation createFabricante($nombre: String!, $descripcion: String!) {
  createFabricante(nombre: $nombre, descripcion: $descripcion) {
    fabricante {
      nombre
      descripcion
    }
  }
}
`

export const UPDATE_FABRICANTE_D = gql`
mutation updateFabricante($id: ID!, $nombre: String!, $descripcion: String!) {
  updateFabricante(id: $id, nombre: $nombre, descripcion: $descripcion) {
    fabricante {
      id
      nombre
      descripcion
    }
  }
}
`

export const ADD_CATEGORIA_D = gql`
mutation CreateCategoria($nombre: String!, $descripcion: String!) {
  createCategoria(nombre: $nombre, descripcion: $descripcion) {
    categoria {
      nombre
      descripcion
    }
  }
}
`

export const UPDATE_CATEGORIA_D = gql`
mutation UpdateCategoria($id: ID!, $nombre: String!, $descripcion: String!) {
  updateCategoria(id: $id, nombre: $nombre, descripcion: $descripcion) {
    categoria {
      id
    nombre
    descripcion
    }
  }
}
`

export const ADD_DEPRECIACION_D = gql`
  mutation createDepreciacion($meses: Int!, $nombre: String!, $valorMinimo: Float!) {
    createDepreciacion(meses: $meses, nombre: $nombre, valorMinimo: $valorMinimo) {
      depreciacion {
        meses
        nombre
        valorMinimo
      }
    }
  }
`

export const UPDATE_DEPRECIACION_D = gql`
  mutation updateDepreciacion($id: ID!, $meses: Int!, $nombre: String!, $valorMinimo: Float!) {
    updateDepreciacion(id: $id, meses: $meses, nombre: $nombre, valorMinimo: $valorMinimo) {
      depreciacion {
        id
        meses
        nombre
        valorMinimo
      }
    }
  }
`

export const GET_DEPARTAMENTOS_D = gql`
{
  departamentos{
    id
    nombre
    descripcion
  }
}
`

export const ADD_DEPARTAMENTO_D = gql`
mutation MyMutation($nombre: String!, $descripcion: String!) {
  createDepartamento(nombre: $nombre, descripcion: $descripcion) {
    departamento {
      nombre
      descripcion
    }
  }
}
`

export const UPDATE_DEPARTAMENTO_D = gql`
mutation updateDepartamento($id: ID!, $nombre: String!, $descripcion: String!) {
  updateDepartamento(id: $id, nombre: $nombre, descripcion: $descripcion) {
    departamento {
      id
      nombre
      descripcion
    }
  }
}
`

export const ADD_UBICACION_D = gql`
mutation createUbicacion($nombre: String!, $direccion: String!) {
  createUbicacion(nombre: $nombre, direccion: $direccion) {
    ubicacion  {
      nombre
      direccion
    }
  }
}
`

export const UPDATE_UBICACION_D = gql`
mutation UpdateUbicacion($id: ID!, $nombre: String!, $direccion: String!) {
  updateUbicacion(id: $id, nombre: $nombre, direccion: $direccion) {
    ubicacion {
      id
      nombre
      direccion
    }
  }
}
`

export const ADD_MODELO_D = gql`
  mutation createModelo($nombre: String!, $categoriaId: ID!, $fabricanteId: ID!) {
    createModelo(nombre: $nombre, categoria: { id: $categoriaId }, fabricante: { id: $fabricanteId }) {
      modelo {
        id
      nombre
      categoria {
        id
      }
      fabricante {
        id
      }
      }
    }
  }
`

export const UPDATE_MODELO_D = gql`
  mutation UpdateModelo($id: ID!, $nombre: String!, $categoriaId: ID!, $fabricanteId: ID!) {
    updateModelo(id: $id, nombre: $nombre, categoria: { id: $categoriaId }, fabricante: { id: $fabricanteId }) {
      modelo {
        id
      nombre
      categoria {
        id
      }
      fabricante {
        id
      }
      }
    }
  }
`

export const ADD_ACTIVO_D = gql`
  mutation createActivo(
    $nombre: String!, 
    $serial: String!, 
    $ultimaAsignacion: String!, 
    $ultimaDesasignacion: String!, 
    $valorActual: Float!, 
    $valorCompra: Float!, 
    $asignadoAId: ID!, 
    $depreciacionId: ID!, 
    $estado: String!, 
    $fechaCompra: String!, 
    $modeloId: ID!, 
    $ubicacionId: ID!
  ) {
    createActivo(
      activo: {
        nombre: $nombre, 
        serial: $serial, 
        ultimaAsignacion: $ultimaAsignacion, 
        ultimaDesasignacion: $ultimaDesasignacion, 
        valorActual: $valorActual, 
        valorCompra: $valorCompra, 
        asignadoA: { id: $asignadoAId }, 
        depreciacion: { id: $depreciacionId }, 
        estado: $estado, 
        fechaCompra: $fechaCompra, 
        modelo: { id: $modeloId }, 
        ubicacion: { id: $ubicacionId }
      }
    ) {
      activos {
        asignadoA {
          id
        }
        depreciacion {
          id
        }
        modelo {
          id
        }
        ubicacion {
          id
        }
        nombre
        serial
        ultimaAsignacion
        ultimaDesasignacion
        valorActual
        valorCompra
        estado
        fechaCompra
      }
    }
  }
`

export const UPDATE_ACTIVO_D = gql`
  mutation updateActivo(
    $id: ID!,
    $nombre: String!, 
    $serial: String!, 
    $ultimaAsignacion: String!, 
    $ultimaDesasignacion: String!, 
    $valorActual: Float!, 
    $valorCompra: Float!, 
    $asignadoAId: ID!, 
    $depreciacionId: ID!, 
    $estado: String!, 
    $fechaCompra: String!, 
    $modeloId: ID!, 
    $ubicacionId: ID!
  ) {
    updateActivo(
      id: $id,
      activo: {
        nombre: $nombre, 
        serial: $serial, 
        ultimaAsignacion: $ultimaAsignacion, 
        ultimaDesasignacion: $ultimaDesasignacion, 
        valorActual: $valorActual, 
        valorCompra: $valorCompra, 
        asignadoA: { id: $asignadoAId }, 
        depreciacion: { id: $depreciacionId }, 
        estado: $estado, 
        fechaCompra: $fechaCompra, 
        modelo: { id: $modeloId }, 
        ubicacion: { id: $ubicacionId }
      }
    ) {
      activos {
        asignadoA {
          id
        }
        depreciacion {
          id
        }
        modelo {
          id
        }
        ubicacion {
          id
        }
        nombre
        serial
        ultimaAsignacion
        ultimaDesasignacion
        valorActual
        valorCompra
        estado
        fechaCompra
      }
    }
  }
`