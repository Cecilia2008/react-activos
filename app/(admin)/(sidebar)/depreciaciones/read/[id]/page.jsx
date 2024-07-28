'use client'
import React, {useState, useEffect} from 'react'
import DepreciacionesView from '@/components/depreciaciones/DepreciacionesView'
import { GET_DEPRECIACION } from '@/graphql/QuerysSprint'
import { useQuery } from '@apollo/client'

const loadData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/depreciaciones/${id}`)
  const data = await res.json()
  return data
}

const DepreciacionReadPage = ({params}) => {

  console.log(params.id)
  const { loading, error, data } = useQuery(GET_DEPRECIACION, {
    variables: { id: params.id },
  });

  if(loading) {
    return <>Loading...</>
  } else {
    return (
      <DepreciacionesView data={data.depreciacionById}/>
    )
  }
}

export default DepreciacionReadPage