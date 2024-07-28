'use client'
import React, {useState, useEffect} from 'react'
import ModelosFormCreate from '@/components/modelos/ModelosFormCreate'
import { GET_CATEGORIAS, GET_FABRICANTES, GET_MODELO } from '@/graphql/QuerysSprint'
import { useQuery } from '@apollo/client'

const loadData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/modelos/${id}`)
  const data = await res.json()
  return data
}

const ModelosEditPage = ({params}) => {

  console.log(params.id)
  const { loading: loading3, error, data } = useQuery(GET_MODELO, {
    variables: { id: params.id },
  });
  const { data: categorias, error: error1, loading: loading1 } = useQuery(GET_CATEGORIAS);
  const { data: fabricantes, error: error2, loading: loading2 } = useQuery(GET_FABRICANTES)

  if (loading1 || loading2 || loading3) {
    return <p>Loading...</p>;
    
  }

  // Muestra un mensaje de error si cualquiera de las consultas ha fallado
  if (error1 || error2) {
    return <p>Error: {error1?.message || error2?.message}</p>;
  }

    return (
      <>
      {console.log(data)}
      <ModelosFormCreate data={data.modeloById} categorias={categorias.allCategorias} fabricantes={fabricantes.allFabricantes}/>
      </>
      
    )
}

export default ModelosEditPage