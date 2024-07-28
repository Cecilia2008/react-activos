import { gql } from "@apollo/client";

export const GET_CANT_ACTIVOS_CATEGORIA = gql`
  query MyQuery {
    categoriasConActivos {
      name
      y
      drilldown
    }
  }
`;

export const GET_ACTIVOS_DRillDOWN = gql`
  query MyQuery {
    categoriaActivos {
      id
      name
      type
      data
    }
  }
`;

export const GET_CANT_ACTIVOS_PERSONA = gql`
  query MyQuery {
    personasCantidadActivos {
      name
      y
      drilldown
    }
  }
`;

export const GET_CANT_PERSONAS_MODELO = gql`
  query MyQuery {
    modelosCantidadPersonas {
      name
      y
      drilldown
    }
  }
`;

export const GET_ESTADISTICAS = gql`
  query MyQuery {
    estadisticas {
      totalActivos
      totalModelos
      totalPersonas
    }
  }
`;

export const GET_TOTAL_VALORES_MODELO = gql`
  query MyQuery {
    totalValoresPorModelo {
    modelo
    valorActualTotal
    valorCompraTotal
  }
  }
`;
