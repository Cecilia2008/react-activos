'use client'
import React, {useState, useEffect} from 'react'
import DepreciacionesTable from '@/components/depreciaciones/DepreciacionesTable'
import { GET_DEPRECIACIONES } from '@/graphql/QuerysSprint'
import { useQuery } from '@apollo/client'

const loadActivos = async () => {
  const res = await fetch('http://localhost:3000/api/depreciaciones')
  const data = await res.json()
  //console.log(data)
  return data
}

const DepreciacionPage = () => {

  const { data, error, loading } = useQuery(GET_DEPRECIACIONES);

  if(loading) {
    return <>Loading...</>
  } else {
    return (
      <DepreciacionesTable users={data.allDepreciaciones}/>
    )
  }
  
}

export default DepreciacionPage