'use client'
import React, {useState, useEffect} from 'react'
import ModelosView from '@/components/modelos/ModelosView'
import { GET_MODELO } from '@/graphql/QuerysSprint'
import { useQuery } from '@apollo/client'

const loadData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/modelos/${id}`)
  const data = await res.json()
  return data
}

const CategoriasReadPage = ({params}) => {
  console.log(params.id)
  const { loading, error, data } = useQuery(GET_MODELO, {
    variables: { id: params.id },
  });

  if(loading) {
    return <>Loading...</>
  }
    return (
      <ModelosView data={data.modeloById}/>
    )
  
}

export default CategoriasReadPage