'use client'
import React, {useState, useEffect} from 'react'
import UbicacionesView from '@/components/ubicaciones/UbicacionesView'
import { GET_UBICACION } from '@/graphql/QuerysSprint'
import { useQuery } from '@apollo/client'

const UbicacionReadPage = ({params}) => {

  console.log(params.id)
  const { loading, error, data } = useQuery(GET_UBICACION, {
    variables: { id: params.id },
  });

  if(loading) {
    return <>Loading...</>
  } else {
    return (
      <UbicacionesView data={data.ubicacionById}/>
    )
  }
}

export default UbicacionReadPage