'use client'
import React, {useState, useEffect} from 'react'
import UbicacionesTable from '@/components/ubicaciones/UbicacionesTable'
import { GET_UBICACIONES } from '@/graphql/QuerysSprint'
import { useQuery } from '@apollo/client'

const loadActivos = async () => {
  const res = await fetch('http://localhost:3000/api/ubicaciones')
  const data = await res.json()
  //console.log(data)
  return data
}

const UbicacionPage = () => {

  const { data, error, loading } = useQuery(GET_UBICACIONES);

  if(loading) {
    return <>Loading...</>
  } else {
    return (
      <UbicacionesTable users={data.allUbicaciones}/>
    )
  }
  
}

export default UbicacionPage