'use client'
import React, {useState, useEffect} from 'react'
import ModelosTable from '@/components/modelos/ModelosTable'
import { GET_MODELOS } from '@/graphql/QuerysSprint'
import { useQuery } from '@apollo/client'


const ModelosPage = () => {

  const { data, error, loading } = useQuery(GET_MODELOS);

  if(loading) {
    return <>Loading...</>
  } else {
    return (
      <ModelosTable users={data.allModelos}/>
    )
  }
  
}

export default ModelosPage