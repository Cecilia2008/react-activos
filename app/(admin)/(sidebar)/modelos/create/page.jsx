'use client'
import React from 'react'
import ModelosFormCreate from '@/components/modelos/ModelosFormCreate'
import { useQuery } from '@apollo/client';
import { GET_CATEGORIAS, GET_FABRICANTES } from '@/graphql/QuerysSprint';

const ModelosCreatePage = () => {

  const { data: categorias, error: error1, loading: loading1 } = useQuery(GET_CATEGORIAS);
  const { data: fabricantes, error: error2, loading: loading2 } = useQuery(GET_FABRICANTES)

  if (loading1 || loading2) {
    return <p>Loading...</p>;
  }

  // Muestra un mensaje de error si cualquiera de las consultas ha fallado
  if (error1 || error2) {
    return <p>Error: {error1?.message || error2?.message}</p>;
  }
  return (
    <ModelosFormCreate categorias={categorias.allCategorias} fabricantes={fabricantes.allFabricantes}/>
  )
}

export default ModelosCreatePage