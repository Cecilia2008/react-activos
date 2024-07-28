'use client'
import React, {useState, useEffect} from 'react'
import ActivosView from '@/components/activos/ActivosView'
import { GET_ACTIVO } from '@/graphql/QuerysSprint'
import { useQuery } from '@apollo/client'


const ActivosReadPage = ({params}) => {

  const { loading, error, data } = useQuery(GET_ACTIVO, {
    variables: { id: params.id },
  });

  if(loading) {
    return <>Loading...</>
  }
    return (
      <ActivosView data={data.activosById}/>
    )
  
}

export default ActivosReadPage