import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(request: { email: $email, password: $password }) {
      token
    }
  }
`;

export const GET_FABRICANTES = gql`
  query MyQuery {
    allFabricantes {
      descripcion
      nombre
      id
    }
  }
`;

export const GET_FABRICANTE = gql`
  query GetFabricanteById($id: ID!) {
    fabricanteById(id: $id) {
      id
      nombre
      descripcion
    }
  }
`;

export const ADD_FABRICANTE = gql`
  mutation AddFabricante($nombre: String!, $descripcion: String!) {
    addFabricante(fabricante: { nombre: $nombre, descripcion: $descripcion }) {
      nombre
      descripcion
    }
  }
`;

export const UPDATE_FABRICANTE = gql`
  mutation UpdateFabricante($id: ID!, $nombre: String!, $descripcion: String!) {
    updateFabricante(
      fabricante: { id: $id, nombre: $nombre, descripcion: $descripcion }
    ) {
      id
      nombre
      descripcion
    }
  }
`;

export const GET_CATEGORIAS = gql`
  query MyQuery {
    allCategorias {
      id
      nombre
      descripcion
    }
  }
`;

export const GET_CATEGORIA = gql`
  query GetCategoriaById($id: ID!) {
    categoriaById(id: $id) {
      id
      nombre
      descripcion
    }
  }
`;

export const ADD_CATEGORIA = gql`
  mutation AddCategoria($nombre: String!) {
    addCategoria(categoria: { nombre: $nombre }) {
      nombre
      descripcion
    }
  }
`;

export const UPDATE_CATEGORIA = gql`
  mutation UpdateCategoria($id: ID!, $nombre: String!) {
    updateCategoria(categoria: { id: $id, nombre: $nombre }) {
      id
      nombre
      descripcion
    }
  }
`;

export const GET_DEPRECIACIONES = gql`
  query MyQuery {
    allDepreciaciones {
      id
      meses
      nombre
      valorMinimo
    }
  }
`;

export const GET_DEPRECIACION = gql`
  query GetDepreciacionById($id: ID!) {
    depreciacionById(id: $id) {
      meses
      nombre
      valorMinimo
      id
    }
  }
`;

export const ADD_DEPRECIACION = gql`
  mutation AddDepreciacion(
    $meses: String!
    $nombre: String!
    $valorMinimo: String!
  ) {
    addDepreciacion(
      depreciacion: {
        meses: $meses
        nombre: $nombre
        valorMinimo: $valorMinimo
      }
    ) {
      meses
      nombre
      valorMinimo
    }
  }
`;

export const UPDATE_DEPRECIACION = gql`
  mutation UpdateDepreciacion(
    $id: ID!
    $meses: String!
    $nombre: String!
    $valorMinimo: String!
  ) {
    updateDepreciacion(
      depreciacion: {
        id: $id
        meses: $meses
        nombre: $nombre
        valorMinimo: $valorMinimo
      }
    ) {
      id
      meses
      nombre
      valorMinimo
    }
  }
`;

export const GET_DEPARTAMENTOS = gql`
  query MyQuery {
    allDepartamentos {
      id
      nombre
      descripcion
    }
  }
`;

export const GET_DEPARTAMENTO = gql`
  query MyQuery($id: ID!) {
    departamentoById(id: $id) {
      descripcion
      nombre
      id
    }
  }
`;

export const ADD_DEPARTAMENTO = gql`
  mutation MyMutation($nombre: String!, $descripcion: String!) {
    addDepartamento(
      departamento: { descripcion: $descripcion, nombre: $nombre }
    ) {
      descripcion
      nombre
    }
  }
`;

export const UPDATE_DEPARTAMENTO = gql`
  mutation UpdateDepartamento(
    $id: ID!
    $nombre: String!
    $descripcion: String!
  ) {
    updateDepartamento(
      departamento: { id: $id, nombre: $nombre, descripcion: $descripcion }
    ) {
      id
      nombre
      descripcion
    }
  }
`;

export const GET_UBICACIONES = gql`
  query MyQuery {
    allUbicaciones {
      id
      nombre
      direccion
    }
  }
`;

export const GET_UBICACION = gql`
  query GetUbicacionById($id: ID!) {
    ubicacionById(id: $id) {
      id
      nombre
      direccion
    }
  }
`;

export const ADD_UBICACION = gql`
  mutation AddUbicacion($nombre: String!, $direccion: String!) {
    addUbicacion(ubicacion: { nombre: $nombre, direccion: $direccion }) {
      nombre
      direccion
    }
  }
`;

export const UPDATE_UBICACION = gql`
  mutation UpdateUbicacion($id: ID!, $nombre: String!, $direccion: String!) {
    updateUbicacion(
      ubicacion: { id: $id, nombre: $nombre, direccion: $direccion }
    ) {
      id
      nombre
      direccion
    }
  }
`;

export const GET_MODELOS = gql`
  query MyQuery {
    allModelos {
      id
      nombre
      categoria {
        nombre
      }
      fabricante {
        nombre
      }
    }
  }
`;

export const GET_MODELO = gql`
  query GetModeloById($id: ID!) {
    modeloById(id: $id) {
      id
      nombre
      categoria {
        id
        nombre
      }
      fabricante {
        id
        nombre
      }
    }
  }
`;

export const ADD_MODELO = gql`
  mutation AddModelo($nombre: String!, $categoriaId: ID!, $fabricanteId: ID!) {
    addModelo(
      modelo: {
        nombre: $nombre
        categoria: { id: $categoriaId }
        fabricante: { id: $fabricanteId }
      }
    ) {
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
`;

export const UPDATE_MODELO = gql`
  mutation UpdateModelo(
    $id: ID!
    $nombre: String!
    $categoriaId: ID!
    $fabricanteId: ID!
  ) {
    updateModelo(
      modelo: {
        id: $id
        nombre: $nombre
        categoria: { id: $categoriaId }
        fabricante: { id: $fabricanteId }
      }
    ) {
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
`;

export const GET_PERSONAS = gql`
  query MyQuery {
    allPersonas {
      id
      nombre
      telefono
      ci
      email
      departamento {
        nombre
      }
    }
  }
`;

export const GET_PERSONA = gql`
  query GetPersonaById($id: ID!) {
    personaById(id: $id) {
      ci
      email
      id
      nombre
      telefono
      departamento {
        id
        nombre
      }
    }
  }
`;

export const ADD_PERSONA = gql`
  mutation addPersona(
    $ci: String!
    $email: String!
    $nombre: String!
    $telefono: String!
    $departamentoId: ID!
  ) {
    addPersona(
      persona: {
        ci: $ci
        email: $email
        nombre: $nombre
        telefono: $telefono
        departamento: { id: $departamentoId }
      }
    ) {
      ci
      departamento {
        id
      }
      email
      id
      nombre
      telefono
    }
  }
`;

export const UPDATE_PERSONA = gql`
  mutation addPersona(
    $id: ID!
    $ci: String!
    $email: String!
    $nombre: String!
    $telefono: String!
    $departamentoId: ID!
  ) {
    addPersona(
      persona: {
        id: $id
        ci: $ci
        email: $email
        nombre: $nombre
        telefono: $telefono
        departamento: { id: $departamentoId }
      }
    ) {
      ci
      departamento {
        id
      }
      email
      id
      nombre
      telefono
    }
  }
`;

export const GET_ACTIVOS = gql`
  query MyQuery {
    allActivos {
      id
      nombre
      image
      serial
      estado
      valorCompra
      asignadoA {
        nombre
      }
      ubicacion {
        nombre
      }
    }
  }
`;

export const GET_ACTIVO = gql`
  query GetActivoById($id: ID!) {
    activosById(id: $id) {
      asignadoA {
        nombre
        id
      }
      depreciacion {
        nombre
        id
      }
      estado
      etiqueta
      fechaCompra
      image
      id
      nombre
      modelo {
        nombre
        id
      }
      serial
      ubicacion {
        nombre
        id
      }
      ultimaAsignacion
      ultimaDesasignacion
      valorActual
      valorCompra
    }
  }
`;

export const ADD_ACTIVO = gql`
  mutation AddActivo(
    $nombre: String!
    $serial: String!
    $ultimaAsignacion: String!
    $ultimaDesasignacion: String!
    $valorActual: Float!
    $valorCompra: Float!
    $asignadoAId: ID!
    $depreciacionId: ID!
    $estado: String!
    $fechaCompra: String!
    $modeloId: ID!
    $ubicacionId: ID!
  ) {
    addActivo(
      activo: {
        nombre: $nombre
        serial: $serial
        ultimaAsignacion: $ultimaAsignacion
        ultimaDesasignacion: $ultimaDesasignacion
        valorActual: $valorActual
        valorCompra: $valorCompra
        asignadoA: { id: $asignadoAId }
        depreciacion: { id: $depreciacionId }
        estado: $estado
        fechaCompra: $fechaCompra
        modelo: { id: $modeloId }
        ubicacion: { id: $ubicacionId }
      }
    ) {
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
`;

export const UPDATE_ACTIVO = gql`
  mutation UpdateActivo(
    $id: ID!
    $nombre: String!
    $serial: String!
    $ultimaAsignacion: String!
    $ultimaDesasignacion: String!
    $valorActual: Float!
    $valorCompra: Float!
    $asignadoAId: ID!
    $depreciacionId: ID!
    $estado: String!
    $fechaCompra: String!
    $modeloId: ID!
    $ubicacionId: ID!
  ) {
    updateActivo(
      id: $id
      activo: {
        nombre: $nombre
        serial: $serial
        ultimaAsignacion: $ultimaAsignacion
        ultimaDesasignacion: $ultimaDesasignacion
        valorActual: $valorActual
        valorCompra: $valorCompra
        asignadoA: { id: $asignadoAId }
        depreciacion: { id: $depreciacionId }
        estado: $estado
        fechaCompra: $fechaCompra
        modelo: { id: $modeloId }
        ubicacion: { id: $ubicacionId }
      }
    ) {
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
`;
