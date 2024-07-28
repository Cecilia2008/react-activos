'use client'
import React, {useState, useEffect} from 'react'
import FabricantesView from '../../../../components/fabricantes/FabricantesView'
import { GET_FABRICANTE } from '@/graphql/QuerysSprint'
import { useQuery } from '@apollo/client'

const loadData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/fabricantes/${id}`)
  const data = await res.json()
  return data
}

const FabricantesReadPage = ({params}) => {

  console.log(params.id)
  const { loading, error, data } = useQuery(GET_FABRICANTE, {
    variables: { id: params.id },
  });

  if(loading) {
    return <>Loading...</>
  } else {
    return (
      <FabricantesView data={data.fabricanteById}/>
    )
  }
}

export default FabricantesReadPage