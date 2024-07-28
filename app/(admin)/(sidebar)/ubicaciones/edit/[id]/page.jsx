'use client'
import React, {useState, useEffect} from 'react'
import UbicacionesFormCreate from '@/components/ubicaciones/UbicacionesFormCreate'
import { GET_UBICACION } from '@/graphql/QuerysSprint'
import { useQuery } from '@apollo/client'


const UbicacionEditPage = ({params}) => {

  console.log(params.id)
  const { loading, error, data } = useQuery(GET_UBICACION, {
    variables: { id: params.id },
  });

  if(loading) {
    return <>Loading...</>
  } else {
    return (
      <UbicacionesFormCreate data={data.ubicacionById}/>
    )
  }
}

export default UbicacionEditPage